# Then & Now: Digital Object Museum of Generational Memory

Coursework project for **CPT208 Human-Centric Computing**.

**Group:** B4-4  
**Topic:** B4 Relation between Generations  
**Track:** Heritage / Intergenerational connection  
**Portfolio site:** this repository  
**Final web app prototype:** [https://family-link-client.vercel.app/](https://family-link-client.vercel.app/)

## Project Overview

**Then & Now** is a mobile-first digital object museum designed to support communication between grandparents, parents, and younger family members. The project uses familiar everyday objects, such as photo albums, handwritten letters, CD players, maps, recipes, and digital equivalents, as conversation starters for intergenerational storytelling.

Instead of asking family members to begin with a formal interview or long story, the system invites users to compare objects from different generations, respond to gentle prompts, and save memories as museum-style exhibits. The main human-centric goal is to make family heritage visible, playful, and emotionally accessible.

## Live Links

- Final Web App: [https://family-link-client.vercel.app/](https://family-link-client.vercel.app/)
- Low-Fi Figma Prototype: [https://www.figma.com/proto/Z85yrf3MHXS7TemC34nVln/low-fi?node-id=0-1&t=dQmOWiDL6lJ21mHV-1](https://www.figma.com/proto/Z85yrf3MHXS7TemC34nVln/low-fi?node-id=0-1&t=dQmOWiDL6lJ21mHV-1)
- High-Fi Figma Prototype: [https://www.figma.com/make/wdkGDys0joKM7vPCE8KL8o/high-fi?p=f&t=qGCEucOWyUBHIe8l-0&fullscreen=1](https://www.figma.com/make/wdkGDys0joKM7vPCE8KL8o/high-fi?p=f&t=qGCEucOWyUBHIe8l-0&fullscreen=1)
- Source Repository: [https://github.com/samke2t/samke2t.github.io](https://github.com/samke2t/samke2t.github.io)
- Demo Video: TODO - add video file name or hosted video link if required

## Team Members

| Member | Programme | Main Contributions |
| --- | --- | --- |
| Shengjie Xu | BSc Information and Computing Science | Poster design, core system features, video scripting support, portfolio updates |
| Zeyu Li | BEng Digital Media Technology | Portfolio content, portfolio structure, front-end work, video editing support |
| Zhanyuan Xie | BEng Digital Media Technology | Academic/product review, user interviews, portfolio writing, system testing |
| Aiwei Liu | BEng Digital Media Technology | Evaluation testing, system work, poster/portfolio support, video demonstration |

## Coursework Requirements Mapping

| CPT208 Requirement | Where It Is Addressed |
| --- | --- |
| Motivation and track selection | Research section: Heritage motivation and project rationale |
| Academic and commercial review | Research section: 4 academic papers and 4 commercial products |
| Stakeholders and personas | Research and Users sections |
| User journey map | Users section: journey flow and detailed journey map |
| User requirements | Users section: three must-have playful requirements |
| Evidence of user research | Users section: five user research evidence photos |
| Crazy Eights | Ideation section: eight rapid sketch concepts |
| Design alternatives | Ideation section: selected, considered, and rejected alternatives |
| Low-fi prototype | Ideation section and Figma link |
| Technical implementation | Experience section: system architecture and implementation notes |
| High-fi prototype / hosted system | Experience section and final web app link |
| Usability testing | Evaluation section: three-participant testing results |
| Iterative refinement | Evaluation section: before/after screenshots and refinement notes |
| References and AI disclosure | References section |

## Core User Requirements

1. **Interactive Object Engagement**  
   Users can select, combine, or manipulate objects so they directly participate in the memory experience.

2. **Low-Pressure Exploration**  
   Users can explore visually with optional guidance, simple navigation, and intuitive actions suitable for different digital abilities.

3. **Immediate Feedback**  
   Users receive clear visual feedback after interactions, helping the experience feel playful, rewarding, and understandable.

## Main Features

- Fixed navigation portfolio with smooth scrolling between project sections.
- Hero exhibition introduction using old and new object imagery.
- Team member cards with roles and contributions.
- Research archive covering motivation, literature review, product review, and stakeholders.
- Persona boards, memory object strip, user journey map, and user requirements.
- Crazy 8 sketch gallery and design alternatives comparison.
- Low-fi prototype showcase with six screens and external Figma link.
- High-fi prototype carousel with nine screen states.
- Technical implementation diagram covering frontend state, localStorage, REST API, WebSocket/STOMP, and MySQL.
- Evaluation section with participant cards, task completion tables, feedback quotes, before/after refinement screenshots, and design implications.

## Technologies Used

### Portfolio Website

- HTML5
- CSS3
- Vanilla JavaScript
- Responsive layout with CSS Grid, Flexbox, and media queries
- Intersection Observer API for section reveal animation
- Touch and button controls for the high-fi carousel
- Local image assets for research evidence, sketches, prototypes, and evaluation screenshots

### Final Web App Prototype

The final hosted prototype is linked from the portfolio and described in the technical implementation section.

- React frontend
- Spring Boot REST API
- MySQL database
- localStorage for lightweight client-side state
- WebSocket / STOMP for shared puzzle or interaction state
- Vercel deployment for the public web app

## Project Structure

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── beforeafter/
    ├── crazy8/
    ├── groupphoto/
    ├── hi-fi/
    ├── journeymap/
    ├── low-fi/
    ├── members/
    ├── new/
    ├── old/
    ├── persona/
    └── product/
```

## How to Run Locally

This portfolio is a static website and does not require a build step.

### Option 1: Open Directly

Open `index.html` in a web browser.

### Option 2: Run a Local Static Server

From the project folder:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

If Python is not available, any static server can be used, such as VS Code Live Server.

## Data Handling

The portfolio website itself is static and only uses JavaScript for navigation, reveal animation, and the high-fi image carousel.

The final web app prototype handles interaction states through:

- `localStorage` for fast interface feedback, completed puzzle states, preset story unlocks, and cached user role.
- REST API calls for persistent actions such as uploading objects, creating stories, updating lock state, loading the museum wall, and updating listen count.
- MySQL tables such as `tb_photo`, `tb_story`, and `tb_user` for persistent family object and story data.
- WebSocket / STOMP messages for shared puzzle or interaction state when family members interact together.

## Accessibility and Responsiveness

- The portfolio is designed as a responsive web page for desktop and mobile viewing.
- Images include descriptive `alt` text where they communicate project content.
- Navigation uses semantic anchors and section IDs.
- Buttons include accessible labels where icon-only controls are used.
- The interface uses large visual sections, clear headings, and high-contrast monochrome styling to support readability.

## Evaluation Summary

The alpha version was tested with three participants representing different levels of digital familiarity:

- P1, a young family member, completed the flow mostly independently.
- P2, a parent, completed the flow after short guidance.
- P3, a grandparent, required continuous support and clearer step-by-step instructions.

The main iteration findings were:

- Save actions needed to be more visible.
- Reflection prompts needed to be shorter and less open-ended.
- Older users needed stronger step labels, larger text, and clearer interaction guidance.

These findings informed the final design direction: the experience should remain visual, guided, and low-pressure.

## AI Use and Academic Integrity Note

The portfolio references AI-assisted tools where relevant, including ChatGPT, Cursor, and Figma Make. These tools were used for text refinement, prototype logic support, and interface/code assistance. The project motivation, user research, design decisions, and human-centric justification remain the group’s own work.

If required by the coursework submission, primary AI coding prompts should be included in an `/ai-logs` folder alongside this repository.

## References

Full references are listed in the portfolio website. Key categories include:

- Academic literature on intergenerational connectivity, tangible memory, memento storytelling, and home-based intergenerational bonding.
- Product benchmarks including Google Photos, Marco Polo, StoryCorps, and FamilyAlbum.
- AI-assisted design and development tools including ChatGPT, Cursor, and Figma Make.
