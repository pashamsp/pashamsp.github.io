// greetings.js
const Greeting = () => {
  const hour = new Date().getHours();
  let greetingMessage;

  if (hour >= 5 && hour < 12) {
    alert(greetingMessage = 'Good morning!');
  } else if (hour >= 12 && hour < 17) {
    alert(greetingMessage = 'Good afternoon!');
  } else {
    alert(greetingMessage = 'Good evening!');
  }

  return React.createElement('h2', null, greetingMessage);
};

ReactDOM.render(React.createElement(Greeting, null), document.getElementById('greeting-root'));
