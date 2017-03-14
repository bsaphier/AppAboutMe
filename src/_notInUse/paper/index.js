/*globals view */

export default function(props) {
  const path = new Path.Rectangle({
    point: [window.innerWidth / 2, window.innerHeight / 2],
    size: [75, 75],
    strokeColor: 'black'
  });


  view.onFrame = (event) => {
    // Each frame, rotate the path by 3 degrees:
    path.rotate(3);
  };
}
