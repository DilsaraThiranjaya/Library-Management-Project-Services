module.exports = {
  apps : [
    {
      name: 'book-service',
      script: 'java',
      args: '-jar book-service/target/book-service-1.0.0.jar',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G'
    },
    {
      name: 'member-service',
      script: 'java',
      args: '-jar member-service/target/member-service-1.0.0.jar',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G'
    },
    {
      name: 'file-service',
      script: 'java',
      args: '-jar file-service/target/file-service-1.0.0.jar',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G'
    }
  ]
};
