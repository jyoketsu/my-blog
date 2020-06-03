import moment from "moment";
import Tag from "../common/Tag";
import Info from "../article/ArticleInfo";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";

export default function Header({ category, tags, updateTime }) {
  return (
    <div className="article-head">
      <div className="head-left">
        <div className="wrapper">
          <CategoryOutlinedIcon
            fontSize="small"
            style={{ color: "rgba(0, 0, 0, 0.54)", marginRight: "8px" }}
          />
          <Info info={category.name} />
        </div>
        <div className="wrapper">
          <LocalOfferOutlinedIcon
            fontSize="small"
            style={{ color: "rgba(0, 0, 0, 0.54)", marginRight: "8px" }}
          />
          {tags.map((tag, index) => (
            <Tag id={tag._id} key={index} text={tag.name} color={tag.color} />
          ))}
        </div>
      </div>
      <div className="head-right">
        <div className="wrapper">
          <Info info={moment(updateTime).format("YYYY年MM月DD日")} />
        </div>
      </div>
      <style jsx>{`
        .article-head {
          display: flex;
          justify-content: space-between;
        }
        .head-left,
        .head-right {
          display: flex;
          flex-direction: column;
        }
        .wrapper {
          display: flex;
          align-items: center;
          height: 25px;
        }
      `}</style>
    </div>
  );
}
