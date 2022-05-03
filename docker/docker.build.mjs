import child_process, { spawn } from 'child_process';

import pkg from '../package.json';

function checkPackageJsonFile () {
  let flag = pkg.port && pkg.version && pkg.author && pkg.name;
  if (!flag) {
    const error = 'The package.json must include flieds named port, version, author and name!!!'
    console.error(error)
    throw new Error(error);
  }
}

const pwd = () => child_process.exec(`pwd`, (error, stdout, stderr) => {
  if (error) {
    console.error(error)
    return new Error(error)
  }
  console.log("pwd")
  console.log(stdout)
  pwdClose();

})

const pwdClose = () => {
  const dockerbulid = spawn('docker', [`build`, `--build-arg`, `port=${pkg.port}`, `--build-arg`, `name=${pkg.name}`, `-f`, `./docker/Dockerfile`, ``, `-t`, `${pkg.author}/${pkg.name}:${pkg.version}`, `.`]);

  dockerbulid.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  dockerbulid.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  dockerbulid.on('close', dockerbuildClose);
}

const dockerbuildClose = (code) => {
  console.log(`child process exited with code ${code}`);
  console.log(`Building is sucessful`)
  const dockerpush = spawn('docker', [`push`, `${pkg.author}/${pkg.name}:${pkg.version}`]);

  dockerpush.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  dockerpush.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  dockerpush.on('close', dockerpushClose);
}

const dockerpushClose = (code) => {
  console.log(`child process exited with code ${code}`);
  console.log(`Pushing is sucessful`)
}


checkPackageJsonFile();
pwd()