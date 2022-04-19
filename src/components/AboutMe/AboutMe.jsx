import React from 'react';
import classes from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={classes.aboutMeWrapper}>
      <span>
        <b>🔺 Позиция: </b>
        Junior Frontend Developer
      </span>
      <br />
      <span>
        <b>🔺 Формат работы: </b>
        удаленка
      </span>
      <br />
      <span>
        <b>🔺 Занятость: </b>
        полная
      </span>
      <br />
      <span>
        <b>🔺 Ожидания по зарплате: </b>
        от 70 000 руб
      </span>
      <br />
      <span>
        <b>🔺 Английский язык: </b>
        A2 -- B1
      </span>
      <br />
      <span>
        <b>🔺 Обо мне: </b>
        Еще со школы имел большой интерес к точным наукам, участвовал в
        олимпиадах по математике и программированию, в частности ездил на ИТМО,
        занимал призовые места. Увлекался написанием скриптов на python. В
        данный момент моя цель - развиваться как frontend специалист. Мне
        нравится решать сложные задачи и строить объёмные системы, считаю, что
        главное не быстрота выполнения, а качество и быстродействие продукта.
      </span>
      <br />
      <br />
      <span>
        <b>🔻Список навыков:</b>
        <ul className={classes.AboutMeUl}>
          <li>HTML5</li>
          <li>CSS3</li>
          <ul className={classes.AboutMeUl}>
            <li>flexbox</li>
            <li>grid</li>
            <li>bootstrap</li>
            <li>БЭМ</li>
          </ul>
          <li>
            <b>JavaScript</b>
          </li>
          <ul className={classes.AboutMeUl}>
            <li>axios</li>
          </ul>
          <li>
            <b>TypeScript</b> основы
          </li>
          <li>Jest unit tests</li>
          <li>
            <b>React</b>
          </li>
          <ul className={classes.AboutMeUl}>
            <li>css-modules</li>
            <li>React-hooks</li>
            <li>react-routed-dom</li>
            <li>react-redux</li>
            <li>Formik</li>
          </ul>
          <li>
            <b>Redux</b>
          </li>
          <ul className={classes.AboutMeUl}>
            <li>redux-thunk</li>
            <li>Redux-Saga</li>
          </ul>
          <li>REST API</li>
          <li>SOLID, KISS, DRY</li>
          <li>
            <b>git</b>
          </li>
          <li>Figma</li>
        </ul>
      </span>
      <span>
        <b>Soft skills:</b>
      </span>
      <ul className={classes.AboutMeUl}>
        <li>
          🔅 <b>Коммуникабельность</b>
        </li>
        <li>🔅 Усидчивость</li>
        <li>
          🔅 <b>Самодисциплина</b>
        </li>
        <li>
          🔅 <b>Адаптивность</b>
        </li>
        <li>🔅 Креативность</li>
      </ul>
      <span>
        <b>Pet projects:</b>
      </span>
      <ul className={classes.AboutMeUl}>
        <li>➡️ social network ⬅️</li>
        <ul className={classes.AboutMeUl}>
          <li>
            👀{' '}
            <a
              href="https://webrofl.github.io/social-network/#/login"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </li>
          <li>
            📖{' '}
            <a
              href="https://github.com/webRofl/social-network/"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          </li>
        </ul>
        <li>➡️ weather app ⬅️</li>
        <ul className={classes.AboutMeUl}>
          <li>
            👀{' '}
            <a
              href="https://webrofl.github.io/weather-app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </li>
          <li>
            📖{' '}
            <a
              href="https://github.com/webRofl/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          </li>
        </ul>
        <li>➡️ restaurant menu ⬅️</li>
        <ul className={classes.AboutMeUl}>
          <li>
            👀{' '}
            <a
              href="https://the-great-webrofl-site.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </li>
          <li>
            📖{' '}
            <a
              href="https://github.com/webRofl/burger-delivery"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          </li>
        </ul>
      </ul>
      <span>
        ✏️ <b>Контакты</b>:
      </span>
      <br />
      <a href="https://t.me/LHDBC" target="_blank" rel="noreferrer">
        <b>Telegram</b>
      </a>
      <br />
      <a href="https://github.com/webRofl" target="_blank" rel="noreferrer">
        <b>GitHub</b>
      </a>
      <br />
      <a
        href="https://izhevsk.hh.ru/applicant/resumes/view?resume=ed7ec5c8ff09cc96b90039ed1f744c746e4970"
        target="_blank"
        rel="noreferrer"
      >
        <b>hh</b>
      </a>
    </div>
  );
};

export default AboutMe;
