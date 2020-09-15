import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import {
  Container,
  Text,
  Card,
  Text404,
  LinkGoBack,
} from "../components/FourOFour/FourOFourStyled";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import CursorSvg from "../assets/img/cursor.svg";

const FourOFour = () => {
  let page = useRef(null);
  let text = useRef(null);
  let cursor = useRef(null);
  let fourOFour = useRef(null);

  let chars = `これらの文字を併用して表記された文章が仮名交（かなまじり）または仮名交文（かなまじりぶん）と呼ばれる、現在の日本での標準的な文章である。これは、「それまで公式とされた漢文に、仮名が交じっている」という意味だが、漢字とかな の併用が標準となった現代ではかえって読みにくく、また意味が掴みにくい。そのため、送り仮名をつけた「仮名交じり文」や更に漢字との併用であることを明記した「漢字仮名交じり文」といった表現で示される場合がある。
    ローマ由来のアルファベット（ラテン文字）を用いて日本語を表記することもでき、日本ではローマ字と呼ばれる。個々のラテン文字を、イニシャルや略号として、漢字・かなと併用して記すことは普通に行われているが、母語話者が文章全体をローマ字で記すこと は稀である。BYR color wheel.svg 	この項目では色を扱っています。閲覧環境によっては、色が適切に表示されていない場合があります。(Template:色)
    一例として朝日新聞のニュース記事（2004年4月19日）の見出しを次に示す。ここでは上記4種類の文字システムがすべて用いられている。漢字は太字オレンジ[1]、ひらがなは青[2]、カタカナは緑[3]、ラテン文字とアラビア数字は下線灰色[4]で示す`;

  let originalText = `Human Error: run --force -n2 law | echo "A robot must obey the orders
          given it by human beings except where such orders would conflict with
          the First Law."`;

  useEffect(() => {
    if (typeof window !== "undefined") gsap.registerPlugin(ScrambleTextPlugin);
    const tl = gsap.timeline();
    gsap.to(cursor, {
      duration: 0.6,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
      boxShadow: "5px 5px 20px #d1d9e6, -5px -5px 15px #fff",
    });
    tl.to(
      fourOFour,
      {
        duration: 1,
        textShadow: `12px 12px 20px #d1d9e6, -12px -12px 20px #fff`,
      },
      "<"
    )
      .to(
        page,
        {
          duration: 1,
          boxShadow: `18px 18px 20px #d1d9e6, -18px -18px 20px #ffffff`,
        },
        "<"
      )
      .to(
        text,
        {
          duration: 3,
          scrambleText: {
            text: originalText,
            speed: 3,
            chars,
            oldClass: "span-japanese",
          },
        },
        "<"
      )
      .to(page, { boxShadow: "none" });
  }, [chars, originalText]);
  return (
    <Container>
      <Text404 ref={el => (fourOFour = el)}>404</Text404>
      <Card
        ref={el => {
          page = el;
        }}
      >
        <Text
          ref={el => {
            text = el;
          }}
        >
          `これらの文字を併用して表記された文章が仮名交（かなまじり）または仮名交文（かなまじりぶん）と呼ばれる、現在の日本での標準的な文章である。これは、「それまで公式とされた漢文に、仮名が交じっている」という意味だが、漢字とかな
          の併用が標準となった現代ではかえって読みにくく、また意味が掴みにくい。そのため、送り仮名をつけた「仮名交じり文」や更に漢字との併用であることを明記した「漢字仮名交じり文」といった表現で示される場合がある。
          ローマ由来のアルファベット（ラテン文字）を用いて日本語を表記することもでき、日本ではローマ字と呼ばれる。個々のラテン文字を、イニシャルや略号として、漢字・かなと併用して記すことは普通に行われているが、母語話者が文章全体をローマ字で記すことす`
        </Text>
      </Card>
      <LinkGoBack>
        <Link to="/">LET ME BRING YOU BACK SAFETLY{"   "}</Link>
        <img
          style={{ height: "2.5rem", borderRadius: 5, margin: "0 1rem" }}
          ref={el => (cursor = el)}
          src={CursorSvg}
          alt="cursor"
        />
      </LinkGoBack>
    </Container>
  );
};

export default FourOFour;
