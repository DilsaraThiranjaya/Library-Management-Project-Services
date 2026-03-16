module.exports = {
  apps : [
    {
      name: 'book-service',
      script: 'java',
      args: '-jar Library-Management-Project-Service-Book/target/book-service-1.0.0.jar',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G'
    },
    {
      name: 'member-service',
      script: 'java',
      args: '-jar Library-Management-Project-Service-Member/target/member-service-1.0.0.jar',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G'
    },
    {
      name: 'file-service',
      script: 'java',
      args: '-jar Library-Management-Project-Service-File/target/file-service-1.0.0.jar',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G'
    }
  ]
};
