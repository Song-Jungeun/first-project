import "../css/searchpage.css";

export default function SearchPage() {
  return (
    <div id="searchdiv">
      <main id="searchmain">
        <div id="searchdiv1">
          <input type="text" id="searchdiv1-1"></input>
          <img id="searchdiv1-2" src="/images/search.png" alt="search img" />
        </div>
        <div id="searchdiv2">
          <div id="searchdiv2-1">
            <p>최근 검색어</p>
            <ul>
              <li>
                최근 검색어 <button>X</button>
              </li>
              <li>
                최근 검색어 <button>X</button>
              </li>
              <li>
                최근 검색어 <button>X</button>
              </li>
            </ul>
          </div>
          <div id="searchdiv2-2">
            <p>인기 검색어</p>
            <ul>
              <li>1. 인기 검색어</li>
              <li>1. 인기 검색어</li>
              <li>1. 인기 검색어</li>
              <li>1. 인기 검색어</li>
              <li>1. 인기 검색어</li>
              <li>1. 인기 검색어</li>
              <li>1. 인기 검색어</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
