import React from "react";
import ds from '../../assets/ds.png'

function About() {
    return (
        <div className="hero min-h-screen  ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={ds} className=" rounded-lg shadow-2xl" />
                <div>
                    <h1 className="pl-10 text-5xl font-bold text-warning-content">About</h1>
                    <p className="pl-10 py-6 text-warning-content">The Memory Makers
                        คือทีมช่างภาพมืออาชีพที่มุ่งมั่นเก็บภาพความทรงจำอันล้ำค่าของคุณให้สวยงามและน่าจดจำเรามีประสบการณ์ในการถ่ายภาพหลากหลายประเภท</p>
                    <p className="pl-10 py-2 text-warning-content">ทำไมต้องเลือก The Memory Makers?</p>
                    <p className="pl-10 py-2 text-warning-content">เรามีบริการถ่ายภาพหลากหลายประเภท ตอบโจทย์ทุกความต้อง
                        การของคุณ ไม่ว่าจะเป็นงานแต่งงาน งานครอบครัว งานอีเวนต์
                        ถ่ายภาพบุคคล และอื่นๆ</p>
                    <button className="btn btn-outline btn-info ml-10">Read More</button>
                </div>
            </div>

        </div>

    )


}
export default About