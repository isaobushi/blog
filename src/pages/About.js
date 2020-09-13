import React, { useEffect, useRef } from "react"
import Layout from "../components/Layout/Layout"
import { Container, Text } from "../components/About/AboutStyled"
import gsap from "gsap"
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import CursorSvg from '../assets/img/cursor.svg'

const About = () => {
  let page = useRef(null)
  let text = useRef(null)
  let cursor = useRef(null)

  let chars = `これらの文字を併用して表記された文章が仮名交（かなまじり）または仮名交文（かなまじりぶん）と呼ばれる、現在の日本での標準的な文章である。これは、「それまで公式とされた漢文に、仮名が交じっている」という意味だが、漢字とかな の併用が標準となった現代ではかえって読みにくく、また意味が掴みにくい。そのため、送り仮名をつけた「仮名交じり文」や更に漢字との併用であることを明記した「漢字仮名交じり文」といった表現で示される場合がある。
    ローマ由来のアルファベット（ラテン文字）を用いて日本語を表記することもでき、日本ではローマ字と呼ばれる。個々のラテン文字を、イニシャルや略号として、漢字・かなと併用して記すことは普通に行われているが、母語話者が文章全体をローマ字で記すこと は稀である。BYR color wheel.svg 	この項目では色を扱っています。閲覧環境によっては、色が適切に表示されていない場合があります。(Template:色)
    一例として朝日新聞のニュース記事（2004年4月19日）の見出しを次に示す。ここでは上記4種類の文字システムがすべて用いられている。漢字は太字オレンジ[1]、ひらがなは青[2]、カタカナは緑[3]、ラテン文字とアラビア数字は下線灰色[4]で示す`

  useEffect(() => {
    if (typeof window !== "undefined") gsap.registerPlugin(ScrambleTextPlugin)
    const tl = gsap.timeline();
    gsap.set(cursor, { height: "3rem",  })
    gsap.to(cursor, { duration:.6, opacity:0, repeat: -1, yoyo: true, boxShadow: "1px 1px 5px orange", borderRadius: 5})
    tl.to(page,
      {
        duration: 1,
        boxShadow: `18px 18px 20px #d1d9e6, -18px -18px 20px #ffffff`
      }
    ).to(text, {duration:3, scrambleText: {original: true, speed:3, chars,oldClass: "span-japanese"}}, "<")
  },[chars])
  return (
    <Layout>
      <Container
        ref={el => {
          page = el;
        }}>
        
        <Text
          ref={el => {
          text = el;
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illo veniam asperiores illum quidem architecto sunt quo nesciunt laborum, rem totam eligendi repudiandae. Voluptatem et eum consectetur nobis ab in!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, animi neque? Velit dolorem modi voluptates, odit maxime deleniti provident incidunt natus magni culpa eius id accusamus iusto quidem ab soluta.l
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, natus obcaecati tenetur quibusdam sunt exercitationem nam magni soluta odio labore ea totam molestias impedit. Quasi ad consectetur eaque ex repudiandae? 
        </Text>
        <div>
          <img
            ref={el => {
              cursor = el;
            }}
            src={CursorSvg} alt="cursor"
          />
        </div>
      </Container>
    </Layout>)
};

export default About
