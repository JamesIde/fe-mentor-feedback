import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

function GoBack() {
  return (
    <section>
      <Link to="/">
        <div className="flex flex-row">
          <div className="mt-[1.5px] mr-4">
            <MdOutlineKeyboardArrowLeft color="blue" />
          </div>
          <div>
            <p className="text-sm font-bold text-blue-900">Go Back</p>
          </div>
        </div>
      </Link>
    </section>
  );
}
export default GoBack;
