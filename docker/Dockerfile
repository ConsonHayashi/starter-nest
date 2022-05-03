from node
arg project="./"
arg port=80
arg name="project"
run set -x ; echo ${port}-------
copy ${project} /home/node/${name}
workdir /home/node/${name}
expose ${port}
entrypoint ["npm", "run", "start:prod"]