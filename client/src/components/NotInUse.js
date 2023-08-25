//BLOB ANIMATION ON MOUSE HOVER
//JS---------------------------------------------------------------------
// useEffect(() => {
  //   const blob1 = document.querySelector("#mouse-hover-blob1");
  //   const blob2 = document.querySelector("#mouse-hover-blob2");
  //   const maxX = window.innerWidth - blob1.offsetWidth;
  //   const maxY = window.innerHeight - blob1.offsetHeight;
  //   document.body.onpointermove = (event) => {
  //     const { clientX, clientY } = event;
  //     const limitedX = Math.min(Math.max(clientX, 0), maxX);
  //     const limitedY = Math.min(Math.max(clientY, 0), maxY);
  //     blob1.animate(
  //       {
  //         left: `${limitedX}px`,
  //         top: `${limitedY}px`,
  //       },
  //       { duration: 200, fill: "forwards" }
  //     );
  //     blob2.animate(
  //       {
  //         left: `${limitedX}px`,
  //         top: `${limitedY}px`,
  //       },
  //       { duration: 200, fill: "forwards" }
  //     );
  //   };
  // }, []);
//HTML---------------------------------------------------------------------
  {/* <div id="mouse-hover-blob1"></div>
        <div id="mouse-hover-blob2"></div>
        <div id="mouse-hover-blob-blur"></div> */}
//CSS----------------------------------------------------------------------
// :root {
//     --blob-blur:30px;
//     --overall-blur:100px;
//     --blob-size:250px;
//   }
//   #mouse-hover-blob-blur{
//     height:200%;
//     width:100%;
//     position:absolute;
//     z-index:-8;
//     backdrop-filter:blur(var(--overall-blur));
//   }
//   #mouse-hover-blob1
//   {
//     background-color: white;
//     height:var(--blob-size);
//     aspect-ratio:1;
//     position:absolute;
//     left:50%;
//     top:50%;
//     z-index:-10;
//     translate: -50% -50%;
//     border-radius:50%;
//     background:linear-gradient(
//       to right,
//       aquamarine,
//       mediumpurple
//     );
//     animation:blob1rotate 10s infinite;
//     filter:blur(var(--blob-blur));
//   }
//   @keyframes blob1rotate {
//     from{
//       rotate:180deg;
//       scale:1.3 1.8;
//     }
//     to{
//       rotate:-180deg;
//       scale:1.7 1.2;
//     }
//   }
//   #mouse-hover-blob2
//   {
//     background-color: white;
//     height:var(--blob-size);
//     aspect-ratio:1;
//     position:absolute;
//     left:50%;
//     top:50%;
//     z-index:-10;
//     translate: -50% -50%;
//     border-radius:50%;
//     background:linear-gradient(
//       to right,
//       aquamarine,
//       mediumpurple
//     );
//     animation:blob2rotate 10s infinite;
//     filter:blur(var(--blob-blur));
//   }
//   @keyframes blob2rotate {
//     from{
//       rotate:0deg;
//       scale:1.9 1.2;
//     }
//     to{
//       rotate:360deg;
//       scale:1.1 1.7;
//     }
//   }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
