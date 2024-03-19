const { gql, default: request } = require("graphql-request");

const MASTER_URL = `https://api-us-west-2.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`;

const getAllCourseList = async () => {
  const query = gql`
    query CourseLists {
      courseLists(orderBy: createdAt_DESC) {
        author
        name
        id
        free
        description
        demoUrl
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        totalChapters
        sourceCode
        tag
        slug
      }
    }
  `;

  const result = await request(MASTER_URL, query);

  return result;
};

const getSideBanner = async () => {
  const query = gql`
    query Banners {
      sideBanners {
        id
        name
        url
        banner {
          url
          id
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);

  return result;
};

const getCourseById = async (courseId) => {
  const query =
    gql`
    query MyQuery {
      courseList(where: { slug: "` +
    courseId +
    `" }) {
      author
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          youtubeUrl
          chapterNumber
        }
      }
      demoUrl
      description
      free
      id
      name
      slug
      sourceCode
      tag
      totalChapters
    }
  }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export default { getAllCourseList, getSideBanner, getCourseById };
