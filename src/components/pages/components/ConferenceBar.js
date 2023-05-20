import React from "react";

const ConferenceBar = ({
                           handleAudioChange,
                           isAudioMuted,
                           handleVideoChange,
                           isVideoMuted,
                           user,
                           handleConferenceFinishing,
                           handleDisconnection,
                           handleChangeConferenceJoinAccess,
                           isConferenceBlocked
                       }) => {
  return (
      <div className="conference-actions col-lg-3 col-md-12 col-sm-12 p-3">
          <div className="h5 text-white text-center">Действия</div>
          <div className="mt-3">
              <div className="text-white text-center">Параметры медиа</div>
              <div className="d-flex justify-content-between p-3">
                  <span className="text-white mt-1">Аудио</span>
                  <button onClick={handleAudioChange} type="button"
                          className={isAudioMuted ? "btn btn-secondary btn-sm" : "btn btn-info btn-sm"}>
                      {isAudioMuted ? "Выключено" : "Включено"}
                  </button>
              </div>
              <div className="d-flex justify-content-between p-3">
                  <span className="text-white mt-1">Видео</span>
                  <button onClick={handleVideoChange} type="button"
                          className={isVideoMuted ? "btn btn-secondary btn-sm" : "btn btn-info btn-sm"}>
                      {isVideoMuted ? "Выключено" : "Включено"}
                  </button>
              </div>
          </div>
          <div className="mt-3">
              <div className="text-white text-center">Параметры конференции</div>

              {user.role === "creator" ?
                  <div className="d-flex justify-content-between mt-3">
                      <button onClick={handleChangeConferenceJoinAccess} type="button"
                              className={isConferenceBlocked ? "btn btn-success btn-sm col-12" : "btn btn-warning btn-sm col-12"}>
                          {isConferenceBlocked ? "Разблокировать" : "Заблокировать"}

                      </button>
                  </div> : "" }
              {user.role === "creator" ?
                  <div className="d-flex justify-content-between mt-3">
                      <button onClick={handleConferenceFinishing} type="button" className="btn btn-danger btn-sm col-12">Завершить</button>
                  </div> : " "}
              <div className="d-flex justify-content-between mt-3">
                  <button onClick={handleDisconnection} type="button" className="btn btn-info btn-sm col-12">Отключиться</button>
              </div>
          </div>
          <div className="mt-3">
              <div className="text-white text-center">Участники</div>
              <div className="d-flex justify-content-between p-3">
                  {/*<span className="text-white mt-1">user</span>*/}
              </div>
          </div>
      </div>
  );
}

export default ConferenceBar;
