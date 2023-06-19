import { Routes, Route, BrowserRouter } from "react-router-dom"
import QuestionTemplate from "../QuestionTemplate/QuestionTemplate";
import Table from "../Summary/Table/Table";
function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/"  exact component={<QuestionTemplate />} />
                    <Route path="/table" component={<Table />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router; 