import * as React from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import ReactPlayer from 'react-player'
import './app.scss';
import { Header } from './Components/Header';

import Grid from '@material-ui/core/Grid';
import { Container } from './Components/Container';
import { Card } from './Components/Card';

export default function App() {
  const videoPlayer = React.useRef<any>()
  const delay = React.useRef<number>(0)
  const progress = React.useRef<number>(0);

  const calculateSecond = React.useCallback(() => {
    const _percentage = (delay.current * 100).toFixed(2)
    const second = (7 * parseFloat(_percentage)) / 100
    videoPlayer.current.seekTo(second, 'seconds');
    return (7 * parseFloat(_percentage)) / 100
  }, [])

  React.useEffect(() => {
    window.scrollTo(0, 0)

    const secondUpdater = setInterval(() => {
      delay.current += (progress.current - delay.current) * 0.09;

      if (videoPlayer.current) {
        const second = calculateSecond();
        videoPlayer.current.seekTo(second, 'seconds')
      }

    }, 40)

    return () => clearInterval(secondUpdater);
  }, [])

  return (
    <div>
      <Header />
      <Controller>
        <Scene
          duration={7000}
          triggerHook={0}
          indicators
          pin
        >
          {(prog: number) => {
            if (progress.current !== prog) {
              progress.current = prog;
              calculateSecond();
            }

            return (
              <div className="videoContainer">
                <ReactPlayer
                  ref={videoPlayer}
                  height={'100%'}
                  width={'100%'}
                  progressInterval={0}
                  url="/videos/10.mp4"
                />
              </div>
            )
          }}
        </Scene>
      </Controller>
      <Container>
        <Grid style={{ padding: '30px 0 150px' }} container justify='space-around'>
          <Grid item sm={12} md={3} lg={3}>
            <Card />
          </Grid>
          <Grid item sm={12} md={3} lg={3}>
            <Card />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}