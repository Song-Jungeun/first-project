import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MypagePage from "./pages/MypagePage";
import MyRevisePage from "./pages/MyRevisePage";
import FindPage from "./pages/FindPage";
import MyPostPage from "./pages/MyPostPage";
import MyCommentPage from "./pages/MyCommentPage";
import MyLikePage from "./pages/MyLikePage";
import MySavePage from "./pages/MySavePage";
import MyEventPage from "./pages/MyEventPage";
import DeleteAccountPage from "./pages/DeleteAccountPage";
import PostWritePage from "./pages/PostWritePage";
import PostDeletePage from "./pages/PostDeletePage";
import PostViewPage from "./pages/PostViewPage";
import PostReviewRevisePage from "./pages/PostReviewRevisePage";
import PostReviewDeletePage from "./pages/PostReviewDeletePage";
import PostListPage from "./pages/PostListPage";
import InquiryWritePage from "./pages/InquiryWritePage";
import InquiryReviewPage from "./pages/InquiryReviewPage";
import InquiryReviewRevisePage from "./pages/InquiryReviewRevisePage";
import InquiryViewPage from "./pages/InquiryViewPage";
import InquiryListPage from "./pages/InquiryListPage";
import NoticeDeletePage from "./pages/NoticeDeletePage";
import NoticeViewPage from "./pages/NoticeViewPage";
import NoticeReviewRevisePage from "./pages/NoticeReviewRevisePage";
import NoticeReviewDeletePage from "./pages/NoticeReviewDeletePage";
import NoticeListPage from "./pages/NoticeListPage";
import EventDeletePage from "./pages/EventDeletePage";
import EventViewPage from "./pages/EventViewPage";
import EventReviewRevisePage from "./pages/EventReviewRevisePage";
import EventReviewDeletePage from "./pages/EventReviewDeletePage";
import EventListPage from "./pages/EventListPage";
import InformationDeletePage from "./pages/InformationDeletePage";
import InformationViewPage from "./pages/InformationViewPage";
import InformationReviewRevisePage from "./pages/InformationReviewRevisePage";
import InformationReviewDeletePage from "./pages/InformationReviewDeletePage";
import InformationListPage from "./pages/InformationListPage";
import ReportListPage from "./pages/ReportListPage";
import ReportViewPage from "./pages/ReportViewPage";
import ReportWritePage from "./pages/ReportWritePage";
import PostRevisePage from "./pages/PostRevisePage";
import NoticeWritePage from "./pages/NoticeWritePage";
import NoticeRevisePage from "./pages/NoticeRevisePage";
import EventWritePage from "./pages/EventWritePage";
import EventRevisePage from "./pages/EventRevisePage";
import InformationWritePage from "./pages/InformationWritePage";
import InformationRevisePage from "./pages/InformationRevisePage";
import SearchPage from "./pages/SearchPage";
import Header3 from "./components/Header3";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/mypage" element={<MypagePage />}></Route>
        <Route path="/myrevise" element={<MyRevisePage />}></Route>
        <Route path="/find" element={<FindPage />}></Route>
        <Route path="/mypost" element={<MyPostPage />}></Route>
        <Route path="/mycomment" element={<MyCommentPage />}></Route>
        <Route path="/mylike" element={<MyLikePage />}></Route>
        <Route path="/mysave" element={<MySavePage />}></Route>
        <Route path="/myevent" element={<MyEventPage />}></Route>
        <Route path="/deleteaccount" element={<DeleteAccountPage />}></Route>
        <Route path="/postwrite" element={<PostWritePage />}></Route>
        <Route path="/postrevise" element={<PostRevisePage />}></Route>
        <Route path="/postdelete" element={<PostDeletePage />}></Route>
        <Route path="/postview" element={<PostViewPage />}></Route>
        <Route
          path="/postreviewrevise"
          element={<PostReviewRevisePage />}
        ></Route>
        <Route
          path="/postreviewdelete"
          element={<PostReviewDeletePage />}
        ></Route>
        <Route path="/postlist" element={<PostListPage />}></Route>
        <Route path="/inquirywrite" element={<InquiryWritePage />}></Route>
        <Route path="/inquiryreview" element={<InquiryReviewPage />}></Route>
        <Route
          path="/inquiryreviewrevise"
          element={<InquiryReviewRevisePage />}
        ></Route>
        <Route path="/inquiryview" element={<InquiryViewPage />}></Route>
        <Route path="/inquirylist" element={<InquiryListPage />}></Route>
        <Route path="/noticewrite" element={<NoticeWritePage />}></Route>
        <Route path="/noticerevise" element={<NoticeRevisePage />}></Route>
        <Route path="/noticedelete" element={<NoticeDeletePage />}></Route>
        <Route path="/noticeview" element={<NoticeViewPage />}></Route>
        <Route
          path="noticereviewrevise"
          element={<NoticeReviewRevisePage />}
        ></Route>
        <Route
          path="/noticereviewdelete"
          element={<NoticeReviewDeletePage />}
        ></Route>
        <Route path="/noticelist" element={<NoticeListPage />}></Route>
        <Route path="/eventwrite" element={<EventWritePage />}></Route>
        <Route path="/eventrevise" element={<EventRevisePage />}></Route>
        <Route path="/eventdelete" element={<EventDeletePage />}></Route>
        <Route path="/eventview" element={<EventViewPage />}></Route>
        <Route
          path="/eventreviewrevise"
          element={<EventReviewRevisePage />}
        ></Route>
        <Route
          path="/eventreviewdelete"
          element={<EventReviewDeletePage />}
        ></Route>
        <Route path="/eventlist" element={<EventListPage />}></Route>
        <Route
          path="/informationwrite"
          element={<InformationWritePage />}
        ></Route>
        <Route
          path="/informationrevise"
          element={<InformationRevisePage />}
        ></Route>
        <Route
          path="/informationdelete"
          element={<InformationDeletePage />}
        ></Route>
        <Route
          path="/informationview"
          element={<InformationViewPage />}
        ></Route>
        <Route
          path="/infomationreviewrevise"
          element={<InformationReviewRevisePage />}
        ></Route>
        <Route
          path="/informationreviewdelete"
          element={<InformationReviewDeletePage />}
        ></Route>
        <Route
          path="/informationlist"
          element={<InformationListPage />}
        ></Route>
        <Route path="/reportlist" element={<ReportListPage />}></Route>
        <Route path="/reportview" element={<ReportViewPage />}></Route>
        <Route path="/repeortwrite" element={<ReportWritePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
