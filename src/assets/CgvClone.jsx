import React, { useState } from "react";
import {
  Home,
  Ticket,
  ShoppingCart,
  MoreHorizontal,
  Gift,
  MapPin,
  ChevronDown,
  ChevronRight,
  Check,
  Bell,
  Search,
  Heart,
  X,
} from "lucide-react";

// --- 공통 컴포넌트 ---
const Sidebar = () => (
  <aside className="w-64 bg-white p-6 flex flex-col flex-shrink-0 border-r border-gray-200">
    <div className="flex-grow">
      <img src="/images/logo.png" alt="CGV Logo" className="w-16 mb-8" />
      <nav>
        <ul className="space-y-5">
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:text-cgv-red"
            >
              <Home size={22} />
              <span>홈</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:text-cgv-red"
            >
              <Ticket size={22} />
              <span>예매·예약</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:text-cgv-red"
            >
              <ShoppingCart size={22} />
              <span>매점</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:text-cgv-red"
            >
              <MoreHorizontal size={22} />
              <span>더보기</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="border-t pt-6 mt-6">
        <nav>
          <ul className="space-y-5">
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-cgv-red font-bold"
              >
                <MapPin size={22} />
                <span>상영관 찾기</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-cgv-red"
              >
                <Gift size={22} />
                <span>특별관</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="mt-auto text-xs text-gray-500">
      <div className="flex items-center justify-between cursor-pointer mb-4">
        <span>CJ CGV(주)</span>
        <ChevronDown size={16} />
      </div>
      <div className="space-x-2">
        <a href="#">이용약관</a>
        <a href="#" className="font-bold text-black">
          개인정보 처리방침
        </a>
      </div>
    </div>
  </aside>
);

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0  bg-opacity-0 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 text-center text-black">
        <h3 className="text-xl font-bold mb-4">예매 완료</h3>
        <p className="mb-6">예매가 성공적으로 완료되었습니다.</p>
        <button
          onClick={onClose}
          className="bg-cgv-red text-white px-6 py-2 rounded-md"
        >
          확인
        </button>
      </div>
    </div>
  );
};

// --- 페이지별 내부 콘텐츠 ---

const LoginContent = ({ onLoginAttempt }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginAttempt(id, password);
  };

  return (
    <div className="flex flex-col w-full h-full bg-gray-50">
      <div className="w-full max-w-sm mx-auto p-8 flex-grow flex flex-col justify-center">
        <div className="flex justify-center mb-8">
          <img src="/images/logo.png" alt="CGV Logo" className="w-24" />
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="CJ ONE 통합 아이디"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cgv-red"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cgv-red"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-cgv-red text-white font-bold py-3 rounded-md hover:bg-red-700"
          >
            로그인
          </button>
        </form>
        <div className="text-center text-sm text-gray-500 mt-4">
          <a href="#" className="hover:underline">
            아이디 찾기
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">
            비밀번호 찾기
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">
            회원가입
          </a>
        </div>
      </div>
      <div className="bg-white p-4 text-center border-t">
        <div className="flex items-center justify-center">
          <div className="text-left">
            <p className="font-bold text-sm">QR코드 찍고</p>
            <p className="font-bold text-base">CGV 앱에서 자세히 보기</p>
          </div>
          <img
            src="/images/qrcode.jpeg"
            alt="QR Code"
            className="w-16 h-16 ml-4"
          />
        </div>
      </div>
    </div>
  );
};

const MovieCard = ({ rank, title, imgSrc, onBook }) => (
  <div className="flex-shrink-0">
    <div className="relative">
      <img
        src={imgSrc}
        alt={`${title} Poster`}
        className="w-64 h-[384px] object-cover rounded-lg bg-gray-200"
      />
      <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-3xl font-bold px-4 py-2 rounded-br-lg rounded-tl-lg">
        {rank}
      </div>
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer">
        <Heart size={20} className="text-white" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
    <div className="mt-2 text-sm text-gray-500">예매율 48.1%</div>
    <button
      onClick={onBook}
      className="mt-2 w-full bg-cgv-red text-white py-2 rounded"
    >
      예매하기
    </button>
  </div>
);

const MainContent = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col bg-white">
    <header className="p-4 flex justify-end items-center space-x-5 border-b flex-shrink-0">
      <button>
        <Gift size={22} />
      </button>
      <button>
        <Bell size={22} />
      </button>
      <button>
        <Search size={22} />
      </button>
    </header>
    <div className="p-6 flex-grow overflow-y-auto">
      <div className="flex items-center border-b">
        <button className="px-4 py-2 text-lg font-bold border-b-2 border-black">
          영화
        </button>
        <button className="px-4 py-2 text-lg text-gray-500">이벤트/혜택</button>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center space-x-4 text-sm">
          <a href="#" className="font-bold">
            무비차트
          </a>
          <a href="#">현재상영작</a>
          <a href="#">상영예정</a>
          <a href="#">ICECON</a>
          <a href="#">아트하우스</a>
          <a href="#">CGV Only</a>
        </div>
        <a href="#" className="text-xs border px-2 py-1 rounded">
          전체보기
        </a>
      </div>
      <div className="mt-6 flex space-x-6">
        <MovieCard
          rank={1}
          title="F1"
          imgSrc="/images/f1.webp"
          onBook={() => onNavigate("seatSelection")}
        />
        <MovieCard
          rank={2}
          title="좀비딸"
          imgSrc="/images/f12.webp"
          onBook={() => onNavigate("seatSelection")}
        />
        <MovieCard
          rank={3}
          title="범죄도시4"
          imgSrc="/images/f123.webp"
          onBook={() => onNavigate("seatSelection")}
        />
      </div>
    </div>
  </div>
);

const Seat = ({ id, status, isSelected, onClick }) => {
  const baseStyle =
    "w-full h-7 rounded flex items-center justify-center text-xs font-semibold transition-colors";
  let style = "";
  const canClick = status === "available";

  if (status === "available") {
    style = isSelected
      ? "bg-red-800 text-white ring-2 ring-white"
      : "bg-red-500 text-white hover:bg-red-600";
  } else if (status === "taken") {
    style = "bg-blue-500 text-white cursor-not-allowed";
  } else {
    // unavailable (회색)
    style = "bg-gray-600 cursor-not-allowed";
    return <button disabled className={`${baseStyle} ${style}`}></button>;
  }

  return (
    <button
      onClick={() => canClick && onClick(id)}
      className={`${baseStyle} ${style}`}
    >
      {id}
    </button>
  );
};

const SeatSelectionPage = ({ onNavigate }) => {
  const [selectedSeat, setSelectedSeat] = useState(null); // 단일 선택으로 변경
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 회색으로 표시될 좌석 목록
  const UNAVAILABLE_SEATS = new Set([
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "D9",
    "D10",
    "D11",
  ]);

  const seatLayout = [
    [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      null,
      "A9",
      "A10",
      "A11",
      "A12",
    ],
    [
      "B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "B7",
      "B8",
      null,
      "B9",
      "B10",
      "B11",
      "B12",
    ],
    [
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "C6",
      "C7",
      "C8",
      null,
      "C9",
      "C10",
      "C11",
      "C12",
    ],
    [
      "D1",
      "D2",
      "D3",
      "D4",
      "D5",
      "D6",
      "D7",
      "D8",
      null,
      "D9",
      "D10",
      "D11",
      "D12",
    ],
  ];

  const handleSeatClick = (seatId) => {
    // 이미 선택된 좌석을 다시 누르면 선택 취소, 다른 좌석을 누르면 선택 변경
    setSelectedSeat((prev) => (prev === seatId ? null : seatId));
  };

  const handleBooking = () => {
    if (!selectedSeat) return;
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onNavigate("main");
  };

  return (
    <>
      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="w-full h-full flex flex-col bg-gray-800 text-white p-6">
        <header className="flex justify-between items-center mb-4 flex-shrink-0">
          <h2 className="text-xl font-bold">부천 4DX관</h2>
          <button onClick={() => onNavigate("main")}>
            <X size={24} />
          </button>
        </header>
        <div className="w-full h-12 bg-gray-600 rounded-t-full mb-8 flex items-center justify-center text-lg flex-shrink-0">
          SCREEN
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div className="grid grid-cols-13 gap-2 w-full max-w-2xl">
            {seatLayout.flat().map((seatId, index) => {
              if (seatId === null) return <div key={`space-${index}`}></div>;

              let status;
              if (seatId.startsWith("A")) {
                status = "taken"; // A열은 모두 파란색
              } else if (UNAVAILABLE_SEATS.has(seatId)) {
                status = "unavailable"; // 지정된 좌석은 회색
              } else {
                status = "available"; // 나머지는 빨간색
              }

              return (
                <Seat
                  key={seatId}
                  id={seatId}
                  status={status}
                  isSelected={selectedSeat === seatId}
                  onClick={handleSeatClick}
                />
              );
            })}
          </div>
        </div>
        <footer className="mt-auto pt-4 border-t border-gray-600 flex items-center justify-between flex-shrink-0">
          <div>인원 {selectedSeat ? 1 : 0}</div>
          <button
            onClick={handleBooking}
            disabled={!selectedSeat}
            className={`px-16 py-3 rounded font-bold transition-colors ${
              selectedSeat
                ? "bg-cgv-red text-white"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
          >
            선택완료
          </button>
        </footer>
      </div>
    </>
  );
};

// --- 최종 App 컴포넌트 (Shell) ---
export default function CgvClone() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("main");

  const handleLogin = (id, password) => {
    if (id === "test" && password === "1234") {
      setIsLoggedIn(true);
      setCurrentPage("main");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      return <LoginContent onLoginAttempt={handleLogin} />;
    }
    switch (currentPage) {
      case "main":
        return <MainContent onNavigate={setCurrentPage} />;
      case "seatSelection":
        return <SeatSelectionPage onNavigate={setCurrentPage} />;
      default:
        return <MainContent onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full max-w-screen-xl h-full max-h-[90vh] flex bg-white rounded-lg shadow-2xl overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col">{renderContent()}</main>
      </div>
    </div>
  );
}
