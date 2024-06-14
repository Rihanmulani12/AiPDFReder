import React from "react";
import "./navbar.css";
import Upload from "./Upload.jsx";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logosvg">
        <svg
          width="37"
          height="36"
          viewBox="0 0 37 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9494 1C28.3307 1 35.9369 8.61051 35.9369 18C35.9369 27.3895 28.3307 35 18.9494 35C9.56813 35 1.96191 27.3895 1.96191 18C1.96191 8.61051 9.56813 1 18.9494 1Z"
            stroke="#0FA958"
            stroke-width="2"
          />
          <path
            d="M32.9398 18C32.9398 10.268 26.6761 4 18.9495 4C11.2229 4 4.95923 10.268 4.95923 18C4.95923 25.732 11.2229 32 18.9495 32C26.6761 32 32.9398 25.732 32.9398 18Z"
            fill="#0FA958"
          />
          <path
            d="M13.5206 19.7053C13.5206 20.0274 13.5775 20.3301 13.6912 20.6135C13.805 20.8841 13.9567 21.1224 14.1463 21.3285C14.3486 21.5346 14.5825 21.6957 14.848 21.8116C15.1261 21.9275 15.4232 21.9855 15.7392 21.9855C16.0426 21.9855 16.3271 21.9275 16.5925 21.8116C16.8707 21.6957 17.1045 21.5346 17.2942 21.3285C17.4964 21.1224 17.6544 20.8841 17.7682 20.6135C17.8946 20.343 17.9579 20.0531 17.9579 19.744C17.9579 19.4348 17.8946 19.1449 17.7682 18.8744C17.6544 18.591 17.4964 18.3462 17.2942 18.1401C17.1045 17.934 16.8707 17.7729 16.5925 17.657C16.3271 17.5411 16.0426 17.4831 15.7392 17.4831C15.4232 17.4831 15.1261 17.5411 14.848 17.657C14.5825 17.7729 14.3486 17.934 14.1463 18.1401C13.9567 18.3462 13.805 18.5845 13.6912 18.8551C13.5775 19.1127 13.5206 19.3961 13.5206 19.7053ZM17.8441 14.7778H21.2953V24.6908H17.8441V23.5894C17.1108 24.5298 16.1185 25 14.8669 25C14.159 25 13.5079 24.8712 12.9138 24.6135C12.3196 24.343 11.8013 23.9694 11.3588 23.4928C10.9163 23.0161 10.5687 22.4557 10.3159 21.8116C10.0757 21.1675 9.95557 20.4654 9.95557 19.7053C9.95557 18.9968 10.0757 18.3269 10.3159 17.6957C10.5561 17.0515 10.8911 16.4911 11.3209 16.0145C11.7507 15.5378 12.2627 15.1643 12.8569 14.8937C13.451 14.6103 14.1084 14.4686 14.829 14.4686C16.0426 14.4686 17.0476 14.9002 17.8441 15.7633V14.7778ZM25.7359 14.7778V24.6908H22.3036V14.7778H25.7359ZM22.0761 10.971C22.0761 10.7005 22.1266 10.4493 22.2278 10.2174C22.3289 9.97262 22.468 9.76006 22.6449 9.57971C22.8219 9.39936 23.0242 9.25765 23.2517 9.15459C23.4919 9.05153 23.7448 9 24.0103 9C24.2757 9 24.5223 9.05153 24.7498 9.15459C24.99 9.25765 25.1986 9.39936 25.3756 9.57971C25.5526 9.76006 25.6916 9.97262 25.7928 10.2174C25.8939 10.4493 25.9445 10.7005 25.9445 10.971C25.9445 11.2415 25.8939 11.4992 25.7928 11.744C25.6916 11.9758 25.5526 12.182 25.3756 12.3623C25.1986 12.5427 24.99 12.6844 24.7498 12.7874C24.5223 12.8905 24.2757 12.942 24.0103 12.942C23.7448 12.942 23.4919 12.8905 23.2517 12.7874C23.0242 12.6844 22.8219 12.5427 22.6449 12.3623C22.468 12.182 22.3289 11.9758 22.2278 11.744C22.1266 11.4992 22.0761 11.2415 22.0761 10.971Z"
            fill="white"
          />
        </svg>

        <svg
          className="vector"
          width="67"
          height="21"
          viewBox="0 0 67 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0181 10.2259C10.0181 9.88855 9.95143 9.57229 9.81818 9.27711C9.69973 8.96787 9.52207 8.7008 9.28518 8.4759C9.04829 8.251 8.76698 8.0753 8.44126 7.9488C8.13034 7.80823 7.78981 7.73795 7.41967 7.73795C7.06434 7.73795 6.73121 7.8012 6.42029 7.92771C6.10937 8.05422 5.83547 8.22992 5.59858 8.45482C5.3765 8.67972 5.19143 8.94679 5.04337 9.25603C4.91012 9.55121 4.8435 9.86747 4.8435 10.2048C4.8435 10.5422 4.91012 10.8584 5.04337 11.1536C5.17662 11.4488 5.36169 11.7088 5.59858 11.9337C5.83547 12.1446 6.10937 12.3203 6.42029 12.4608C6.74601 12.5874 7.08655 12.6506 7.44188 12.6506C7.79722 12.6506 8.13034 12.5874 8.44126 12.4608C8.75217 12.3343 9.01868 12.1586 9.24076 11.9337C9.47765 11.7088 9.66272 11.4488 9.79597 11.1536C9.94403 10.8584 10.0181 10.5492 10.0181 10.2259ZM4.95454 21H0.934814V4.78615H4.95454V5.98795C5.81326 4.96185 6.98291 4.4488 8.46347 4.4488C9.27777 4.4488 10.0329 4.60341 10.7287 4.91265C11.4394 5.20783 12.0538 5.61546 12.572 6.13554C13.0902 6.65562 13.49 7.26707 13.7713 7.96988C14.0674 8.67269 14.2154 9.4247 14.2154 10.2259C14.2154 11.0271 14.0674 11.7721 13.7713 12.4608C13.49 13.1496 13.0902 13.754 12.572 14.2741C12.0686 14.7942 11.469 15.2018 10.7731 15.497C10.0773 15.7922 9.32219 15.9398 8.50788 15.9398C7.08654 15.9398 5.9021 15.4759 4.95454 14.5482V21ZM14.9521 15.6024H18.7497V0H14.9521V15.6024ZM23.6783 10.1627C23.6783 10.5141 23.7449 10.8444 23.8781 11.1536C24.0114 11.4488 24.1891 11.7088 24.4111 11.9337C24.648 12.1586 24.9219 12.3343 25.2328 12.4608C25.5586 12.5874 25.9065 12.6506 26.2766 12.6506C26.632 12.6506 26.9651 12.5874 27.276 12.4608C27.6017 12.3343 27.8757 12.1586 28.0977 11.9337C28.3346 11.7088 28.5196 11.4488 28.6529 11.1536C28.8009 10.8584 28.875 10.5422 28.875 10.2048C28.875 9.86747 28.8009 9.55121 28.6529 9.25603C28.5196 8.94679 28.3346 8.67972 28.0977 8.45482C27.8757 8.22992 27.6017 8.05422 27.276 7.92771C26.9651 7.8012 26.632 7.73795 26.2766 7.73795C25.9065 7.73795 25.5586 7.8012 25.2328 7.92771C24.9219 8.05422 24.648 8.22992 24.4111 8.45482C24.1891 8.67972 24.0114 8.93976 23.8781 9.23494C23.7449 9.51606 23.6783 9.8253 23.6783 10.1627ZM28.7417 4.78615H32.7837V15.6024H28.7417V14.4006C27.8831 15.4267 26.7208 15.9398 25.2551 15.9398C24.4259 15.9398 23.6635 15.7992 22.9676 15.5181C22.2717 15.2229 21.6647 14.8153 21.1465 14.2952C20.6283 13.7751 20.2212 13.1637 19.925 12.4608C19.6437 11.758 19.5031 10.992 19.5031 10.1627C19.5031 9.38956 19.6437 8.65864 19.925 7.96988C20.2063 7.26707 20.5987 6.65562 21.1021 6.13554C21.6055 5.61546 22.2051 5.20783 22.901 4.91265C23.5968 4.60341 24.3667 4.4488 25.2106 4.4488C26.632 4.4488 27.809 4.91968 28.7417 5.86145V4.78615ZM33.9644 4.78615H37.9841V6.15663C38.5319 5.5241 39.0871 5.10241 39.6497 4.89157C40.2124 4.66667 40.8712 4.55422 41.6263 4.55422C42.4258 4.55422 43.1069 4.68072 43.6695 4.93373C44.2469 5.17269 44.7355 5.51707 45.1352 5.96687C45.4609 6.33233 45.683 6.73996 45.8015 7.18976C45.9199 7.63956 45.9791 8.15261 45.9791 8.72892V15.6024H41.9594V10.1416C41.9594 9.60743 41.915 9.17872 41.8262 8.85542C41.7521 8.51807 41.6115 8.25101 41.4042 8.05422C41.2265 7.88554 41.0267 7.76606 40.8046 7.69578C40.5825 7.6255 40.3456 7.59036 40.0939 7.59036C39.4129 7.59036 38.8873 7.78715 38.5171 8.18072C38.1618 8.56024 37.9841 9.10843 37.9841 9.8253V15.6024H33.9644V4.78615ZM55.4862 8.6235C55.3529 8.08936 55.079 7.66064 54.6645 7.33735C54.2499 7.01406 53.7465 6.85241 53.1543 6.85241C52.5325 6.85241 52.0217 7.00703 51.6219 7.31627C51.237 7.6255 50.9927 8.06125 50.889 8.6235H55.4862ZM50.778 10.8373C50.778 12.4819 51.5923 13.3042 53.2209 13.3042C54.0945 13.3042 54.7533 12.9669 55.1975 12.2922H59.084C58.2993 14.7661 56.3375 16.003 53.1987 16.003C52.2364 16.003 51.3554 15.8695 50.5559 15.6024C49.7564 15.3213 49.068 14.9277 48.4905 14.4217C47.9279 13.9157 47.4912 13.3112 47.1803 12.6084C46.8693 11.9056 46.7139 11.1185 46.7139 10.247C46.7139 9.34739 46.8619 8.53916 47.158 7.82229C47.4542 7.09137 47.8761 6.47289 48.4239 5.96687C48.9717 5.46084 49.6306 5.0743 50.4005 4.80723C51.1852 4.5261 52.0661 4.38554 53.0433 4.38554C54.0056 4.38554 54.8718 4.5261 55.6417 4.80723C56.4115 5.0743 57.063 5.46787 57.596 5.98795C58.129 6.50803 58.5362 7.14759 58.8175 7.90663C59.0988 8.65161 59.2394 9.49498 59.2394 10.4367V10.8373H50.778ZM60.5818 11.512C60.5818 14.5693 62.3807 15.6024 64.9568 15.6024H66.889V12.5452H65.5343C64.6903 12.5452 64.3794 12.25 64.3794 11.5542V6.83133H66.8668V3.83735H64.3794V0.96988H60.5818V3.83735H59.0716V6.83133H60.5818V11.512Z"
            fill="black"
          />
        </svg>

        <svg
          className="formaly"
          width="34"
          height="9"
          viewBox="0 0 34 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.7373 1.98696V2.63712H0.0126953V1.98696H2.7373ZM0.828706 6.98045V1.29779C0.828706 1.01171 0.896715 0.773324 1.03264 0.582542C1.16866 0.39185 1.34526 0.248763 1.56244 0.153463C1.77962 0.0580713 2.00876 0.010376 2.25013 0.010376C2.44081 0.010376 2.59647 0.0255742 2.71692 0.0558761C2.8383 0.0862696 2.92817 0.114466 2.98747 0.140465L2.76325 0.803627C2.72433 0.790628 2.66874 0.774333 2.59925 0.754834C2.53069 0.735334 2.44081 0.725628 2.3287 0.725628C2.07242 0.725628 1.88711 0.789531 1.77296 0.917421C1.66112 1.04531 1.60515 1.23271 1.60515 1.47979V6.98045H0.828706ZM5.30014 7.08445C4.84335 7.08445 4.44308 6.97716 4.0984 6.76257C3.75651 6.54808 3.48874 6.2479 3.29601 5.86212C3.10515 5.47634 3.00971 5.02548 3.00971 4.50971C3.00971 3.98954 3.10515 3.53547 3.29601 3.14759C3.48874 2.75961 3.75651 2.45833 4.0984 2.24384C4.44308 2.02925 4.84335 1.92196 5.30014 1.92196C5.756 1.92196 6.15534 2.02925 6.49724 2.24384C6.84192 2.45833 7.10969 2.75961 7.30056 3.14759C7.49328 3.53547 7.58964 3.98954 7.58964 4.50971C7.58964 5.02548 7.49328 5.47634 7.30056 5.86212C7.10969 6.2479 6.84192 6.54808 6.49724 6.76257C6.15534 6.97716 5.756 7.08445 5.30014 7.08445ZM5.30014 6.39529C5.64667 6.39529 5.93112 6.3075 6.15534 6.13191C6.37864 5.95632 6.5445 5.72553 6.65198 5.43945C6.75945 5.15337 6.81319 4.84348 6.81319 4.50971C6.81319 4.17593 6.75945 3.86494 6.65198 3.57666C6.5445 3.28847 6.37864 3.05549 6.15534 2.87771C5.93112 2.70001 5.64667 2.61112 5.30014 2.61112C4.95361 2.61112 4.66823 2.70001 4.44401 2.87771C4.22071 3.05549 4.05485 3.28847 3.94737 3.57666C3.83989 3.86494 3.78616 4.17593 3.78616 4.50971C3.78616 4.84348 3.83989 5.15337 3.94737 5.43945C4.05485 5.72553 4.22071 5.95632 4.44401 6.13191C4.66823 6.3075 4.95361 6.39529 5.30014 6.39529ZM8.40408 6.98045V1.98696H9.15458V2.74121H9.20739C9.29912 2.49413 9.4659 2.29364 9.70773 2.13975C9.94863 1.98586 10.221 1.90896 10.5231 1.90896C10.5805 1.90896 10.6519 1.91006 10.7371 1.91216C10.8233 1.91436 10.8872 1.91766 10.9317 1.92196V2.70221C10.9048 2.69571 10.8446 2.68591 10.7501 2.67292C10.6584 2.65772 10.5611 2.65012 10.4573 2.65012C10.2118 2.65012 9.99218 2.70111 9.79946 2.80291C9.60859 2.9026 9.45756 3.04139 9.34545 3.21908C9.23612 3.39467 9.18145 3.59506 9.18145 3.82054V6.98045H8.40408ZM11.4811 6.98045V1.98696H12.2316V2.76721H12.2974C12.4021 2.50063 12.5726 2.29364 12.807 2.14625C13.0424 1.99675 13.3241 1.92196 13.653 1.92196C13.9865 1.92196 14.2636 1.99675 14.485 2.14625C14.7092 2.29364 14.8834 2.50063 15.0085 2.76721H15.0613C15.1901 2.50932 15.3847 2.30444 15.6432 2.15275C15.9026 1.99886 16.213 1.92196 16.5744 1.92196C17.0265 1.92196 17.3962 2.06175 17.6835 2.34133C17.9707 2.61872 18.1143 3.05109 18.1143 3.63846V6.98045H17.3379V3.63846C17.3379 3.26998 17.2359 3.00669 17.0321 2.8485C16.8283 2.69022 16.5883 2.61112 16.3112 2.61112C15.9564 2.61112 15.6812 2.71731 15.4857 2.9297C15.2902 3.13998 15.1929 3.40657 15.1929 3.72945V6.98045H14.4035V3.56046C14.4035 3.27648 14.3099 3.04789 14.1237 2.8745C13.9365 2.69891 13.6965 2.61112 13.4028 2.61112C13.2008 2.61112 13.0127 2.66422 12.8367 2.77041C12.6634 2.87661 12.5235 3.024 12.416 3.21258C12.3104 3.39897 12.2576 3.61456 12.2576 3.85954V6.98045H11.4811ZM21.2822 7.08445C20.7957 7.08445 20.376 6.97826 20.0221 6.76587C19.6718 6.55128 19.4004 6.2522 19.2095 5.86862C19.0214 5.48284 18.9269 5.03417 18.9269 4.5227C18.9269 4.01123 19.0214 3.56046 19.2095 3.17029C19.4004 2.77801 19.6663 2.47243 20.0063 2.25354C20.3482 2.03246 20.7476 1.92196 21.2034 1.92196C21.4666 1.92196 21.7269 1.96526 21.9836 2.05196C22.2402 2.13865 22.4737 2.27954 22.684 2.47463C22.8953 2.66752 23.063 2.9232 23.1881 3.24188C23.3132 3.56046 23.3752 3.95274 23.3752 4.41871V4.74379H19.4791V4.08054H22.5858C22.5858 3.79885 22.5284 3.54746 22.4144 3.32637C22.3023 3.10529 22.1429 2.9308 21.9345 2.80291C21.7278 2.67511 21.4842 2.61112 21.2034 2.61112C20.8939 2.61112 20.6271 2.68701 20.401 2.83871C20.1768 2.98829 20.0045 3.18329 19.884 3.42387C19.7636 3.66446 19.7033 3.92234 19.7033 4.19762V4.6397C19.7033 5.01687 19.7691 5.33655 19.9007 5.59874C20.0341 5.85882 20.2194 6.05712 20.4566 6.1937C20.6938 6.32809 20.969 6.39529 21.2822 6.39529C21.4869 6.39529 21.6713 6.36709 21.8353 6.3107C22.0021 6.2522 22.1457 6.1655 22.2662 6.05061C22.3866 5.93362 22.4802 5.78842 22.546 5.61504L23.2965 5.82312C23.2177 6.07451 23.0843 6.29559 22.8981 6.48629C22.7118 6.67487 22.4811 6.82217 22.2069 6.92836C21.9326 7.03245 21.625 7.08445 21.2822 7.08445ZM24.186 6.98045V1.98696H24.9365V2.74121H24.9884C25.081 2.49413 25.2478 2.29364 25.4887 2.13975C25.7305 1.98586 26.002 1.90896 26.305 1.90896C26.3615 1.90896 26.4329 1.91006 26.519 1.91216C26.6043 1.91436 26.6691 1.91766 26.7127 1.92196V2.70221C26.6867 2.69571 26.6265 2.68591 26.532 2.67292C26.4393 2.65772 26.3421 2.65012 26.2392 2.65012C25.9937 2.65012 25.7741 2.70111 25.5814 2.80291C25.3905 2.9026 25.2385 3.04139 25.1273 3.21908C25.0171 3.39467 24.9624 3.59506 24.9624 3.82054V6.98045H24.186ZM28.0395 0.322458V6.98045H27.263V0.322458H28.0395ZM29.5905 8.85294C29.459 8.85294 29.3422 8.84214 29.2385 8.82044C29.1356 8.80094 29.0643 8.78145 29.0253 8.76195L29.2227 8.08569C29.4108 8.13339 29.5776 8.15078 29.7221 8.13778C29.8676 8.12479 29.9954 8.06079 30.1076 7.9459C30.2215 7.83321 30.3253 7.65012 30.4198 7.39653L30.5653 7.00645L28.6955 1.98696H29.5387L30.9331 5.96612H30.9859L32.3813 1.98696H33.2235L31.0786 7.70861C30.9813 7.9665 30.8618 8.17998 30.7191 8.34907C30.5773 8.52026 30.4115 8.64706 30.2224 8.72945C30.0362 8.81175 29.8259 8.85294 29.5905 8.85294Z"
            fill="black"
          />
        </svg>

        <svg
          className="dphi"
          width="20"
          height="7"
          viewBox="0 0 20 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.19635 6.97978H0.91333V0.321784H3.24268C3.91165 0.321784 4.4861 0.455077 4.96698 0.721661C5.44971 0.986047 5.82033 1.36642 6.07884 1.86279C6.33735 2.35906 6.46707 2.95292 6.46707 3.64428C6.46707 4.33784 6.33643 4.93381 6.07607 5.43228C5.81663 5.93075 5.44324 6.31332 4.95402 6.5799C4.46665 6.84649 3.88107 6.97978 3.19635 6.97978ZM2.1336 5.93615H3.13706C3.60682 5.93615 3.99874 5.85165 4.31191 5.68265C4.62601 5.51137 4.86136 5.25678 5.0198 4.91861C5.17732 4.57842 5.25606 4.15355 5.25606 3.64428C5.25606 3.13492 5.17732 2.71234 5.0198 2.37636C4.86136 2.03828 4.62787 1.7858 4.3184 1.61891C4.01171 1.44991 3.62997 1.36532 3.17318 1.36532H2.1336V5.93615ZM7.25649 6.97978V0.321784H9.78318C10.3011 0.321784 10.7357 0.417175 11.0859 0.607867C11.4399 0.798649 11.7058 1.06084 11.8855 1.39462C12.0681 1.7262 12.1589 2.10337 12.1589 2.52595C12.1589 2.95292 12.0681 3.3322 11.8855 3.66378C11.7039 3.99536 11.4352 4.25655 11.0794 4.44724C10.7246 4.63582 10.2863 4.73011 9.76651 4.73011H8.09223V3.73857H9.60251C9.9055 3.73857 10.1529 3.68658 10.3456 3.58249C10.5393 3.47849 10.6819 3.3354 10.7737 3.15341C10.8682 2.97132 10.9154 2.76223 10.9154 2.52595C10.9154 2.28976 10.8682 2.08168 10.7737 1.90179C10.6819 1.7219 10.5383 1.5821 10.3428 1.48241C10.1501 1.38052 9.90086 1.32962 9.59602 1.32962H8.47676V6.97978H7.25649ZM13.9869 4.05386V6.97978H12.7963V0.321784H13.961V2.83483H14.0203C14.138 2.55305 14.3214 2.33086 14.5697 2.16837C14.8199 2.00368 15.1377 1.92128 15.5241 1.92128C15.8743 1.92128 16.181 1.99388 16.4414 2.13907C16.7027 2.28427 16.9047 2.49665 17.0473 2.77624C17.1919 3.05582 17.2641 3.3972 17.2641 3.80028V6.97978H16.0735V3.98236C16.0735 3.64648 15.9855 3.3853 15.8095 3.19891C15.6362 3.01032 15.3934 2.91603 15.0793 2.91603C14.869 2.91603 14.68 2.96162 14.5132 3.05262C14.3492 3.14142 14.2195 3.27041 14.125 3.43949C14.0333 3.60849 13.9869 3.81337 13.9869 4.05386ZM18.1073 6.97978V1.98628H19.2988V6.97978H18.1073ZM18.7068 1.27762C18.5178 1.27762 18.3556 1.21583 18.2194 1.09224C18.0832 0.966548 18.0156 0.815951 18.0156 0.640365C18.0156 0.462673 18.0832 0.31208 18.2194 0.188493C18.3556 0.0627993 18.5178 0 18.7068 0C18.8977 0 19.0598 0.0627993 19.1932 0.188493C19.3294 0.31208 19.3971 0.462673 19.3971 0.640365C19.3971 0.815951 19.3294 0.966548 19.1932 1.09224C19.0598 1.21583 18.8977 1.27762 18.7068 1.27762Z"
            fill="#0FA958"
          />
        </svg>
      </div>

      {<Upload />}
    </div>
  );
};

export default Navbar;
