import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Download,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Sparkles,
  MapPin,
  GraduationCap
} from "lucide-react";
import './styles.css';

const profile = {
  name: 'พนัส เหล่าตระกูลงาม',
  role: 'Computer Science Student',
  headline: 'Building software that solves real problems.',
  intro: 'นักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจการพัฒนาซอฟต์แวร์และการสร้าง Web Application ที่ใช้งานได้จริง พร้อมเรียนรู้และพัฒนาตัวเองผ่าน Project, Experiment และการทำงานร่วมกับ AI',
  location: 'Bangkok, Thailand',
  email: 'panaspai.l@gmail.com',
  linkedin: 'https://www.linkedin.com/in/%E0%B8%9E%E0%B8%99%E0%B8%B1%E0%B8%AA-%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B9%E0%B8%A5%E0%B8%87%E0%B8%B2%E0%B8%A1-b52270436/',
};

const skills = [
  {icon:Code2,title:'Programming',items:['JavaScript','HTML / CSS']},
  {icon:Globe,title:'Web Development',items:['React','Responsive UI','REST API']},
  {icon:Database,title:'Database',items:['MySQL','Data Modeling']},
  {icon:Sparkles,title:'AI / Vibe Coding',items:['ChatGPT','Prompt Design','Iterative Debugging','AI-assisted Development']},
];

function Nav({open,setOpen}){
 return <header className="nav"><a className="brand" href="#top">&lt;/&gt; <span>พนัส เหล่าตระกูลงาม<span className="dot">.</span>dev</span></a><button className="menuBtn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button><nav className={open?'navLinks open':'navLinks'}>{['About','Skills','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}<a className="navCta" href="#contact" onClick={()=>setOpen(false)}>Let’s talk <ArrowUpRight size={15}/></a></nav></header>
}

function SectionTitle({eyebrow,title,children}){return <div className="sectionHead"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{children}</div>}

function App(){
 const [open,setOpen]=useState(false);
 return <div id="top">
  <Nav open={open} setOpen={setOpen}/>
  <main>
   <section className="hero container">
    <div className="heroCopy"><span className="eyebrow">COMPUTER SCIENCE • SOFTWARE DEVELOPMENT</span><h1>{profile.name}<br/><span>{profile.headline}</span></h1><p>{profile.intro}</p><div className="heroActions"><a className="button primary" href="#contact">Contact me</a></div><div className="quickMeta"><span><MapPin size={15}/>{profile.location}</span><span><GraduationCap size={15}/>Computer Science Student</span></div></div>
    <div className="heroVisual"><div className="codeCard"><div className="windowBar"><i/><i/><i/><span>~/portfolio</span></div><div className="codeBody"><div className="codeLine"><span className="purple">const</span> developer = {'{'}</div><div className="codeLine indent"><span className="cyan">name</span>: <span className="green">'{profile.name}'</span>,</div><div className="codeLine indent"><span className="cyan">focus</span>: <span className="green">'software'</span>,</div><div className="codeLine indent"><span className="cyan">mindset</span>: <span className="green">'build → test → improve'</span></div><div className="codeLine">{'}'}</div><div className="cursor">_</div></div></div><div className="heroBadge">OPEN TO<br/><strong>OPPORTUNITIES</strong></div></div>
   </section>

   <section id="about" className="section container"><SectionTitle eyebrow="01 / ABOUT" ></SectionTitle><div className="testCard"><div className="testTitle">แนะนำตัว</div>{['ผมคือใคร? : พนัส เหล่าตระกูลงาม','การศึกษา : มหาวิทยาลัยศรีปทุม','อยากทำงานสายไหน? : งานที่เกี่ยวข้องกับ Full Stack Web Development หรือ สายงานที่ใกล้เคียง','Skill เด่นคืออะไร? : Javascript'].map((t,i)=><div className="testRow" key={t}><b>{String(i+1).padStart(2,'0')}</b><span>{t}</span></div>)}</div></section>

   <section id="skills" className="section darkSection"><div className="container"><SectionTitle eyebrow="02 / SKILLS" title="Skills that I can explain"><span className="sectionNote">Evidence over buzzwords</span></SectionTitle><div className="skillGrid">{skills.map(({icon:Icon,title,items})=><article className="skillCard" key={title}><Icon size={23}/><h3>{title}</h3><div className="chips">{items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></div></section>

   <section id="contact" className="contactSection"><div className="container contactInner"><div><span className="eyebrow">03 / CONTACT</span><p>{profile.intro}</p></div><div className="contactActions"><a className="button primary" href={'mailto:'+profile.email}><Mail size={17}/> Email me</a><a className="button ghost" href={profile.linkedin}> LinkedIn</a></div></div></section>
  </main>
  <footer><div className="container footerInner"><span>BUILD IT. SHIP IT. OWN IT.</span></div></footer>
 </div>
}

createRoot(document.getElementById('root')).render(<App/>);
