import React, { Component } from 'react';
import Video from '../components/video';
import Title from '../components/title';
import Timer from '../components/timer';
import { formattedTime } from '../../utils';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/fullscreen';
import PlayPause from '../components/play-pause';
import ProgressBar from '../components/progress-bar';
import Controls from '../components/video-player-controls';
import VideoPlayerLayout from '../components/video-player-layout';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    lastVolume: null,
    volume: 0.5
  }

  componentWillMount() {
    this.setState({
      pause: (!this.props.autoplay)
    });
  }

  setRef = (element) => {
    this.player = element;
  }

  togglePlay = () => {
    this.setState({
      pause: !this.state.pause
    });
  }

  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }

  handleTimeUpdate = () => {
    this.setState({
      currentTime: this.video.currentTime
    });
  }

  handleProgressChange = (event) => {
    this.video.currentTime = event.target.value;
  }

  handleSeeking = () => {
    this.setState({
      loading: true
    });
  }

  handleSeeked = () => {
    this.setState({
      loading: false
    });
  }

  handleVolumeChange = (event) => {
    this.video.volume = event.target.value;
    this.setState({
      volume: this.video.volume
    });
  }

  handleMuteVolume = () => {
    const lastVolume = this.video.volume;
    this.setState({ lastVolume });
    if (this.video.volume !== 0) {
      this.video.volume = 0;
      this.setState({ volume: 0 });
    } else {
      this.video.volume = this.state.lastVolume;
      this.setState({ volume: this.video.volume });
    }
  }

  handleFullScreenClick = () => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen();
    } else {
      document.webkitExitFullscreen();
    }
  }

  render() {
    return (
      <VideoPlayerLayout setRef={this.setRef} >
        <Title title={this.props.title} />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTime={formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            value={this.state.currentTime}
            duration={this.state.duration}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleMuteVolume={this.handleMuteVolume}
            value={this.state.volume}
          />
          <FullScreen handleFullScreenClick={this.handleFullScreenClick} />
        </Controls>
        <Spinner active={this.state.loading} />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.src}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
