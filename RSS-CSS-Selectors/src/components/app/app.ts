import type { DataItem } from '../../types/types'
import DataProvider from '../data/dataProvider'
import { AppViewer } from '../view/appView'
import { Controller } from './controller/controller'
import { EventEmitter } from 'events'
import { ModalConstructor } from '../view/Game interface/modal constructor/modal'

class App {
  private readonly view: AppViewer
  private levelNumber: number
  private controller: Controller
  private data: DataItem[]
  private readonly emitter: EventEmitter
  private readonly dataProvider: DataProvider

  constructor () {
    this.emitter = new EventEmitter()
    this.data = DataProvider.getInstance().get()
    this.dataProvider = DataProvider.getInstance()
    this.view = new AppViewer(this.data, this.emitter)
    this.levelNumber = 1
    this.controller = new Controller(this.levelNumber, this.data, this.emitter)
  }

  public start (): void {
    this.view.drawLevel(this.levelNumber)
    this.controller.initialize()
    this.emitter.on('levelCompleted', this.nextLevelAfterWin.bind(this))
    this.emitter.on('GameCompleted', this.showWinModal.bind(this))
    this.emitter.on('levelClicked', (clickedLevel) => {
      this.levelAfterClick(clickedLevel)
    })
  }

  private readonly nextLevelAfterWin = (): void => {
    console.log('слушатель сработал')
    this.dataProvider.set(this.levelNumber, 'status', 'completed')
    this.data = this.dataProvider.get()
    console.log(this.data)
    if (this.levelNumber <= this.data.length) {
      this.view.updateLevelStatusView(this.levelNumber)
      this.levelNumber++
      this.view.drawLevel(this.levelNumber)
      this.controller = new Controller(this.levelNumber, this.data, this.emitter)
      this.controller.initialize()
    }
  }

  private readonly levelAfterClick = (levelNumber: number): void => {
    this.levelNumber = levelNumber
    this.view.drawLevel(this.levelNumber)
    this.controller = new Controller(this.levelNumber, this.data, this.emitter)
    this.controller.initialize()
  }

  private showWinModal (): void {
    const modal = new ModalConstructor()
    modal.draw('Congratulations! You have completed all levels.')
  }
}

export default App
