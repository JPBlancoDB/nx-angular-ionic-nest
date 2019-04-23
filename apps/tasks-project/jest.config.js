module.exports = {
  name: "tasks-project",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/tasks-project/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
