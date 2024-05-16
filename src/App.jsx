import { Link, Route, Routes } from "react-router-dom";
import Contact from "./TH-S10/Contact";
import Invoices from "./TH-S10/Invoices";
import Expenses from "./TH-S10/expenses";
import Detail from "./TH-S10/Detail";
import "/App.scss";

export default function App() {
  return (
    <>
      {/* <div id="th1-a10">
        <nav>
          <ul className="list-unstyled components mb-5">
            <li>
              <NavLink to="/" className="dropdown-toggle">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
              <Link to="/about">About</Link>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} 
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div> */}
      <div id="th2-a10">
        <nav>
          <Link to={"/"}>
            <h1>Rikkei Academy</h1>
          </Link>
          <Link to={"/invoices"}>
            <i>go to Invoices</i>
          </Link>
          <Link to={"/expenses"}>
            <i>go toExpences</i>
          </Link>
        </nav>
        {/* navigate: để chuyển trang */}
        {/* Link/NavLink: dùng thay thế thẻ a */}
        {/* useNavigate: dùng khi muốn chuyển trang khác -> khi sử dụng với button */}
        {/* useParams: làm các trang detail sản phẩm lấy đường dẫn con để hiển thị nội dung tương ứng */}

        <Routes>
          <Route path="/"></Route>
          <Route path="/invoices" element={<Invoices />}>
            <Route path="/invoices/:id" element={<Detail />}></Route>
            <Route path="/invoices/:contact" element={<Contact />}></Route>
          </Route>
          <Route path="/expenses" element={<Expenses />}></Route>
        </Routes>
      </div>
    </>
  );
}
