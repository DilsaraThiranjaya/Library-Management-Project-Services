module.exports = {
  apps : [
    {
      name: "book-service",
      script: "java -jar ./book-service/target/book-service-1.0.0.jar",
      log_file: "./logs/book-service.log",
    },
    {
      name: "member-service",
      script: "java -jar ./member-service/target/member-service-1.0.0.jar",
      log_file: "./logs/member-service.log",

    },
    {
      name: "file-service",
      script: "java -jar ./file-service/target/file-service-1.0.0.jar",
      log_file: "./logs/file-service.log",
    }
  ]
};
