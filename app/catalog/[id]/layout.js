import Page from "./page"; // import your Demo's page

export async function generateMetadata({ params }) {

  const EventsList = [
    {
      id: "1",
      name: "The Best",
      list: [
        {
          id: "1",
          image: "/images/gallery/1.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "2",
          image: "/images/gallery/2.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "3",
          image: "/images/gallery/3.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "4",
          image: "/images/gallery/4.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "5",
          image: "/images/gallery/5.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "6",
          image: "/images/gallery/6.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "7",
          image: "/images/gallery/7.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Instagram",
      list: [
        {
          id: "1",
          image: "/images/gallery/1.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "2",
          image: "/images/gallery/6.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "3",
          image: "/images/gallery/7.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
      ],
    },
    {
      id: "3",
      name: "All",
      list: [
        {
          id: "1",
          image: "/images/gallery/1.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "2",
          image: "/images/gallery/2.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "3",
          image: "/images/gallery/3.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "4",
          image: "/images/gallery/4.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "5",
          image: "/images/gallery/5.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "6",
          image: "/images/gallery/6.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "7",
          image: "/images/gallery/7.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
      ],
    },
    {
      id: "4",
      name: "Jon Dinner",
      list: [
        {
          id: "1",
          image: "/images/gallery/1.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "2",
          image: "/images/gallery/6.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "3",
          image: "/images/gallery/7.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
      ],
    },
    {
      id: "5",
      name: "Good Friend",
      list: [
        {
          id: "1",
          image: "/images/gallery/1.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "2",
          image: "/images/gallery/2.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "3",
          image: "/images/gallery/3.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "4",
          image: "/images/gallery/4.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "5",
          image: "/images/gallery/5.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "6",
          image: "/images/gallery/6.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "7",
          image: "/images/gallery/7.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
      ],
    },
    {
      id: "6",
      name: "My Friend Wedding",
      list: [
        {
          id: "1",
          image: "/images/gallery/1.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "2",
          image: "/images/gallery/6.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "3",
          image: "/images/gallery/7.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
      ],
    },
    {
      id: "7",
      name: "birthday party",
      list: [
        {
          id: "1",
          image: "/images/gallery/1.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "2",
          image: "/images/gallery/6.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
        {
          id: "3",
          image: "/images/gallery/7.webp",
          status: "Buy / Yes ",
          title:
            "Lorem Ipsum has been the industry's standard dummy text ever since ",
          listText: [
            "Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia. ",
            "Sed iaculis lorem nec massa suscipit, at turpis",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
            "Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.",
          ],
        },
      ],
    },
  ];
  const data = EventsList.filter((item) => item.id === params.id)[0];
  const metadata = {
    title: data?.name,
    description: "This is description",
    openGraph: {
      title: data?.name,
      description: "This is description",
      images: [
        {
          url: `https://cary.arealglam.com${data?.list[0]?.image}`,
          width: 800,
          height: 600,
          alt: data?.name,
        },
        {
          url: `https://cary.arealglam.com${data?.list[0]?.image}`,
          width: 800,
          height: 600,
          alt: data?.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@NicoTery39168",
      title: data?.name.toString(),
      description: "This is description".toString(),
      image: `https://cary.arealglam.com${data?.list[0]?.image}`,
    },
  };

  return metadata;
}

export default Page;
