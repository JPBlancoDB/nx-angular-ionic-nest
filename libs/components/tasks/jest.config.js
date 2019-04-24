module.exports = {
  name: 'components-tasks',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/components/tasks',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
