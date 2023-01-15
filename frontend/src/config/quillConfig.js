export default {
  modules: {
    toolbar: [
      [{ size: ["18px", "20px", "22px", "24px", "26px", "28px"] }],
      [{ font: [] }],
      [{ align: [] }],
      ["bold", "underline", "italic"],
      [
        {
          color: [
            "#003DA5",
            "#FFC927",
            "#04DDB4",
            "#374151",
            "#F6402F",
            "black",
            "white",
          ],
        },
        { background: [] },
      ],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  },
  formats: [
    "size",
    "font",
    "align",
    "bold",
    "underline",
    "italic",
    "color",
    "background",
    "list",
    "link",
    "image",
  ],
};
