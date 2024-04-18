import "../css/cpostlistcontent.css";
import { Link } from "react-router-dom";

export default function CpostListContent({ postData }) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const getCategoryName = (categoryUid) => {
    const categoryData = {
      1: "일상",
      2: "카테고리2",
    };
    return categoryData[categoryUid] || "Unknown Category";
  };

  const getAgeGroup = (ageUid) => {
    const ageData = {
      1: "10대",
      2: "20대",
      3: "30대",
    };
    return ageData[ageUid] || "Unknown Age Group";
  };

  console.log(postData);
  const postList = postData.map((data) => {
    const categoryName = getCategoryName(data.categoryUid);
    const ageGroup = getAgeGroup(data.ageUid);

    const formattedDate = new Date(data.postCreatedAt);
    const formattedDateString = formattedDate.toISOString().split("T")[0];

    return (
      <div className="cpostlistcontentdiv2" key={data.uid}>
        <ul id="cpostlistcontentul2">
          <li>
            <Link to={"/postview?uid=" + data.uid}>{data.uid}</Link>
          </li>
          <li>
            {categoryName}/{ageGroup}
          </li>
          <li>
            <Link to={"/postview?uid=" + data.uid} onClick={handleClick}>
              {data.postTitle}
            </Link>
          </li>
          <li>0</li>
          <li>0</li>
          <li>{data.userUid}</li>
          <li>{formattedDateString}</li>
        </ul>
      </div>
    );
  });

  return (
    <div id="cpostlistcontentdiv">
      <div id="cpostlistcontentdiv1">
        <ul id="cpostlistcontentul">
          <li>NO.</li>
          <li>카테고리</li>
          <li>글제목</li>
          <li>좋아요 수</li>
          <li>조회수</li>
          <li>작성자</li>
          <li>작성일</li>
        </ul>
      </div>
      {postList}
    </div>
  );
}
