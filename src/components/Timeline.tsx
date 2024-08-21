//@ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool, FaComputer } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Timeline = () => {
    return (
        <div>
            <div className="mt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, easeOut: true }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: "all" }}
                >
                    <h6 className="uppercase text-stone-200 font-bold text-xl md:text-2xl my-4">
                        EXPERIENCE
                    </h6>
                </motion.div>
                <hr className='border-2 border-stone-700'></hr>
            </div>
            <VerticalTimeline lineColor = {'#404040'}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e7e5e4', boxShadow: 'none' }}
                    date="2015 - 2020"
                    dateClassName="text-rose-500"
                    contentArrowStyle={{ borderRight: '7px solid  #e7e5e4' }}
                    iconStyle={{ background: '#881337', color: '#fff'}}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title font-bold text-rose-900">Cheney School</h3>
                    <h4 className="vertical-timeline-element-subtitle">Oxford, England</h4>
                    <p>
                        Secondary School Education
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e7e5e4', boxShadow: 'none' }}
                    date="2020 - 2022"
                    dateClassName="text-rose-500"
                    contentArrowStyle={{ borderRight: '7px solid  #e7e5e4' }}
                    iconStyle={{ background: '#881337', color: '#fff' }}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title font-bold text-rose-900">Chernwell School Sixth Form</h3>
                    <h4 className="vertical-timeline-element-subtitle">Oxford, England</h4>
                    <p>
                        Post-Secondary Education
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#881337', color: '#fff', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  #881337' }}
                    date="2022 - Present"
                    iconStyle={{ background: '#881337', color: '#fff' }}
                    icon={<FaSchool />}

                >
                    <h3 className="vertical-timeline-element-title font-bold text-rose-100">University of Warwick</h3>
                    <h4 className="vertical-timeline-element-subtitle text-rose-100">Coventry, England</h4>
                    <p>
                        BSc Computer Science Degree
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e7e5e4', boxShadow: 'none' }}
                    date="July 2024 - September 2024"
                    dateClassName="text-rose-500"
                    contentArrowStyle={{ borderRight: '7px solid  #e7e5e4' }}
                    iconStyle={{ background: '#881337', color: '#fff' }}
                    icon={<FaComputer />}
                >
                    <h3 className="vertical-timeline-element-title font-bold text-rose-900">Apollo Tyres Ltd</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        Data Scientist Internship
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    )
}

export default Timeline