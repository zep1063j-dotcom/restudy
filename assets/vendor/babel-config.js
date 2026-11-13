// JSX를 로컬 React.createElement 호출로 바꿉니다. 외부 모듈 요청이 필요 없습니다.
Babel.registerPreset('studyReact', {
  presets: [[Babel.availablePresets.react, { runtime: 'classic' }]]
});
