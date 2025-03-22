"use client"
import TextCycleOnHold from "@/Components/TextCycleOnHold";
import useTextCycle from "@/Components/useTextCycle";

export default function PersonalStatement() {

    const childHoodLinkCycle = useTextCycle([
        "It clarified the field’s potential and reminded me of a childhood science-fiction series where a robot, a dear friend to an ordinary boy, solved his mundane daily tasks. At that time, having a robot as my companion was a dream.",
        "Even if I was unable to take a profession related to medicine, I could understand how this field may assist other fields in discovery and organization. And in the process I may even get a chance to treat others, a similar path toward the childhood dream."
    ]);

    const universitySubjectCycle = useTextCycle([
        "Robotics and AI",
        "Artificial Intelligence",
        "Data Science",
        "Machine Learning",
    ]);

    const fieldFocusCycle = useTextCycle([
        "I want to focus on the aspects of robots to be companions to humans.",
        "I want to gain enough knowledge in AI so that one day I can assist medical professionals.",
    ]);

    const universityNames=[
        "Queen Mary, University of London",
        "City St George's, University of London,",
        "Kingston, University of London,",
        "University of Greenwich,",
        "Brunel, University of London,"
    ];

    const universityNameCycle = useTextCycle(universityNames);

    const universityOneOfTheBestCycle = useTextCycle([
        "with one of the best research facilities in the UK.",
        "with one of the best-known university for masters in Artificial intelligence in UK.",
        "with one of the best AI Lab in UK for Deep Learning.",
        "with long-standing relationship with British Computer Society (BCS).",
        "with one of the most diverse university in UK"
    ]);

    const courseThatDrewAttention = useTextCycle([
        "The medical robotics and surgical techniques along with ML and AI for engineering course modules",
        "The agents and multi-agent Systems along with Industrial AI for engineering course modules",
        "The cyber security and AI applications along with ML and DL course modules",
        "The machine learning along with data visualisation course modules",
        "The high performance computational infrastructures along with quantitative data analysis course modules",
    ])
    const attentionCourseCycle = useTextCycle([
        "attention because of my unfulfilled childhood dream. Now,",
        "attention."
    ]);

    const lackingPartCycle = useTextCycle([
        "Electrical and Electronic Engineering (EEE)",
        "Chemistry and Pharmaceutical Sciences",
    ]);





    return (
        <>
            <h1 className={"heading"}>Personal Statement</h1>
            <div className={"center_p"}>
                <p>
                    I am Bushra Hossain, the eldest and only daughter of my parents. From a young age, I was inspired by
                    a doctor and wanted to help people by pursuing the same profession. My ambition guided my early
                    academic progress, but at a crossroads in life, I was introduced to Computer Science and Engineering
                    (CSE). Initially, this shift left me feeling lost and uncertain. However, this changed with the
                    introduction of Machine Learning (ML) during my undergraduate studies. This was a turning point in
                    my life to finally grasp this field. <TextCycleOnHold
                    text={childHoodLinkCycle.currentText}
                    title={childHoodLinkCycle.title}
                    action={childHoodLinkCycle.cycleToNextText}/> As
                    a quiet child, I spent hours imagining a beautiful world around me, which stayed with me into
                    adulthood. At a young age, I was pretty athletic and enjoyed playing badminton and cricket.
                    Still, I couldn't continue due to disciplinary action from my parents, as I used to get lost in
                    those
                    activities.
                </p>
                <p>
                    I graduated from a top university in Bangladesh, North South University. CSE was the subject of
                    code,
                    and I
                    got into it not knowing what it was from my relatives' assessment. Beforehand, I knew I didn't like
                    programming from my experience in college. And I was faced with something I disliked a lot. I didn't
                    have a
                    chance to view its importance, and I wandered around the campus wall, thinking about life and making
                    sense
                    of everything. My path to embracing CSE was not easy, and I had to learn to cope with the situation.
                    After
                    that, I started getting the admiration of my teachers and did quite well in my studies, which were
                    the
                    source of my pride and determination. During that time, I placed my trust in a female classmate, and
                    we
                    attempted to take on AI as my research subject. Unfortunately, I was abandoned by the person, and
                    with
                    my
                    boat leaving me, I felt stranded on the shore, still hoping to get to the other side of the river
                    without
                    having experience. For the first time in my life, I got an F in my course. Failing hard, I wanted my
                    life
                    decisions to be written by me, and I enrolled in courses focused on ML and AI. It was different
                    seeing a
                    machine guessing like a human, where there are so many paths to explore. I recovered and found a
                    goal in
                    life. For the first time, I was interested in computer science. But the study time at this
                    university is
                    over. And I want to see what the world has in store.
                </p>
                <p>
                    Around my final year, I learned the value of teamwork and got a chance to motivate others. I also
                    got to do a virtual internship at Mysoft Limited & eSRD-Lab, BUET, with enhanced data analytical
                    skills and the ability to work under pressure. I have faced different types of technology and
                    visualisation libraries. With an elevated view, I learned about recent advancements in computer
                    hardware in <TextCycleOnHold
                    text={universitySubjectCycle.currentText}
                    title={universitySubjectCycle.title}
                    action={universitySubjectCycle.cycleToNextText}/> applications. <TextCycleOnHold
                    text={fieldFocusCycle.currentText}
                    title={fieldFocusCycle.title}
                    action={fieldFocusCycle.cycleToNextText}/> This topic isn't
                    currently fully available in Bangladesh. Therefore, I want to study abroad to be on the emerging
                    side of this technology. The UK, a hub of cultures, knowledge, and history, inspired me to look for
                    a suitable university there. <TextCycleOnHold
                    text={universityNameCycle.currentText}
                    title={universityNameCycle.title}
                    action={universityNameCycle.cycleToNextText}/> got my attention with the offering of this
                    subject, which combines <TextCycleOnHold
                    text={universitySubjectCycle.currentText}
                    title={universitySubjectCycle.title}
                    action={universitySubjectCycle.cycleToNextText}/> at
                    the centre of the study <TextCycleOnHold
                    text={universityOneOfTheBestCycle.currentText}
                    title={universityOneOfTheBestCycle.title}
                    action={universityOneOfTheBestCycle.cycleToNextText}/> <TextCycleOnHold
                    text={courseThatDrewAttention.currentText}
                    title={courseThatDrewAttention.title}
                    action={courseThatDrewAttention.cycleToNextText}/> also
                    drew my <TextCycleOnHold
                    text={attentionCourseCycle.currentText}
                    title={attentionCourseCycle.title}
                    action={attentionCourseCycle.cycleToNextText}/> I want to contribute
                    to medical science in my lifetime by doing this program. I may lack
                    the <TextCycleOnHold
                    text={lackingPartCycle.currentText}
                    title={lackingPartCycle.title}
                    action={lackingPartCycle.cycleToNextText}/> part,
                    but I am willing to put my whole heart into learning all about it.
                </p>
                <p>
                    During my undergraduate studies, I was lucky to be part of ACM and ACM-W. Because I was comfortable
                    with administrative tasks, I quickly got promoted to being In-Charge. I was shocked to discover that
                    skill in me. Currently, I am studying advanced Python and practising Deep Learning, LLM, and AI
                    Agents, hoping to be helpful as soon as I join my higher studies. For my journey, I would have to
                    leave my life here to travel to a different place to study. However, travelling has been a passion
                    of mine since I was young. Travelling and visiting a new place always gives me a rush of lasting
                    happiness, a thing I learned by going to every corner of my homeland and a few other places. Given
                    the chance, I would be a valuable student at your university and get the required skills and
                    mentorship. I am eager to get the opportunity to be a part of this next generation of human
                    achievement.
                </p>
            </div>
        </>
    )
}