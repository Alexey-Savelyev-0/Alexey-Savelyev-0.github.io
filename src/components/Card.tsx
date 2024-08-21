import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Card = ({ title, link, description, icons }: Project) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);

  useEffect(() => {
    if (isCardOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCardOpened]);

  return (
    <Fragment>
      <CardLink
        className={`p-6 py-12 sm:rounded-lg bg-rose-900 text-rose-100 ${!isCardOpened ? 'flex flex-col justify-between hover:cursor-pointer' : ''}`}
        ref={card}
        opened = {isCardOpened}
        layout
        onClick={() => {
          setIsCardOpened(true);
          if (!isCardOpened) {
            setCardDimensions({
              //@ts-ignore
              width: card.current?.clientWidth,
              //@ts-ignore
              height: card.current?.clientHeight
            });
          }
        }}
      >
        {isCardOpened && (
          <div id="Test" onClick={(e) => { e.stopPropagation(); setIsCardOpened(false); }} className="flex text-xl flex-col items-end mb-5 text-white">
            <RxCross1 className="hover:cursor-pointer"/>
          </div>
        )}
        <div>
          <motion.div className="flex mb-1" layout="position">
          {icons.map((Icon, index) => (
            <Icon key={index} color="#1D1D1D" size={25} className="mr-1" />
          ))}
          </motion.div>
          <motion.h1 className="text-lg font-bold" layout="position">
            {title}
          </motion.h1>
        </div>
        {isCardOpened && (
          <div>
            {link ? <p className="mt-1">Link: <a className ="visited:text-purple-400 underline" href={link}>GitHub Page</a></p> : <p className="mt-1 italic">Closed-Source</p>}
            <div className="text-white">
              {description.split('\n').map((line, i) => (
                <p className="m-3" key={i}>{line}</p> 
              ))}
            </div>
          </div>
        )}
      </CardLink>
      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height
            }}
          ></div>
          <CardBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </Fragment>
      )}
    </Fragment>
  );
}

const CardLink = styled(motion.div)<{ opened: boolean }>`
  height: 100%;
  width: 100%;
  ${(props) =>
    props.opened &&
    css`
      width: min(40rem, 95%);
      height: calc(100% - 10rem);
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 20;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;

      @media (max-width: 640px) {
        width: 100%;
        height: 100%;
        border: none;
        overflow-y: visible;
      }
    `}
`;

const CardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 15;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
`;

export default Card