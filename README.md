Dynamic Background React App
1.App has two components – main app and time – function component.

2.App makes use of React hooks during the implementation.

3.Additional moment time zone package has been used. currentTime is a initial timezone – state used for initial time in GMT which has the default color to be green.

4.Instead of manipulating DOM using document.body.style.backgroundColor, using a piece of state bgcolor it is made dynamic (useState hook)

5.Business logic compares the current time and then displays the background color of the page dynamically.

6.Two useEffect hooks are used- the first one runs only once similar to componentDidMount and second one runs every time as componentDidMount and componentDidUpdate & componentWillMount combined.

7.Time functional component is used which is just displaying the time in the specified format using the props.

8.Sample screencap is shown below.
