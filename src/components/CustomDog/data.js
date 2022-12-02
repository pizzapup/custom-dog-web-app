import { Body, Eyes, Tail } from "./assets/preview";

const fieldValues = {
  inputs: [
    { name: "name", type: "text", placeholder: "fido" },
    {
      name: "color",
      type: "color",
      placeholder: "#c7875b",
      className: "post-color-picker",
    },
  ],
  body: [
    { value: "regular", img: Body.Regular },
    { value: "medium", img: Body.Medium },
    { value: "chonky", img: Body.Chonky },
  ],
  eyes: [
    { value: "closed", img: Eyes.Closed },
    { value: "squinty", img: Eyes.Squint },
    { value: "round", img: Eyes.Round },
  ],
  tail: [
    { value: "straight", img: Tail.Straight },
    { value: "stub", img: Tail.Stub },
    { value: "curved", img: Tail.Curved },
  ],
  // nose: [
  //   {
  //     value: "snout",
  //     img: Nose.Snout,
  //     options: [
  //       "smile",
  //       "straight",
  //       "tongue",
  //       // { name: "smile", img: "smile" },
  //       // { name: "tongue", img: "tongue" },
  //       // { name: "straight", img: "straight" },
  //     ],
  //   },
  //   {
  //     value: "button",
  //     img: Nose.Button,
  //     options: [
  //       "smile",
  //       "straight",
  //       "tongue",
  //       "chibi",
  //       // { name: "smile", img: "Smile" },
  //       // { name: "tongue", img: "Tongue" },
  //       // { name: "straight", img: "Straight" },
  //       // { name: "chibi", img: "Chibi" },
  //     ],
  //   },
  //   {
  //     value: "heart",
  //     img: Nose.Heart,
  //     options: [
  //       "smile",
  //       "straight",
  //       "tongue",
  //       "chibi",
  //       "puppycat",
  //       // { name: "smile", img: "Smile" },
  //       // { name: "tongue", img: "Tongue" },
  //       // { name: "straight", img: "Straight" },
  //       // { name: "chibi", img: "Chibi" },
  //       // { name: "puppycat", img: "PuppyCat" },
  //     ],
  //   },
  // ],
};
export default fieldValues;
