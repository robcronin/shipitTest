module.exports = function(shipit) {
  require("shipit-deploy")(shipit);

  shipit.initConfig({
    default: {
      workspace: "/Users/robcronin/Documents/training/shipitTest/emptydir",
      deployTo: "/tmp/deploy_to",
      keepReleases: 2,
      key: "/Users/robcronin/.ssh/AnsibleTest.pem"
    },
    staging: {
      servers: "ubuntu@ec2-13-59-68-27.us-east-2.compute.amazonaws.com"
    }
  });
};
