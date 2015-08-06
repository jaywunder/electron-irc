# Prattlebox
irc using electron(formerly atom-shell).

## Building
1. `npm install`
2. `npm install -g grunt`
3. `npm install -g electron-prebuilt`
4. `grunt` to transpile the stylus
5.  `electron .` to run the application

## Roadmap
 * `v0.1`
  * [x] Simple login home page
  * [x] Can connect to multiple channels
  * [x] Send and receive messages
  * [x] Join channels from tab button
  * [x] Leave channels from tab button
  * [x] Receive commands and messages
  * [x] See topic
  * [x] Channel list

 * `v0.2`
  * [ ] Add "Font Awesome"
  * [ ] Move all message handling to main process, instead of the renderer
  * [ ] Make the renderer filesystem better laid out, with folders for each
  component rather than appending a prefix to the beginning of each file
  * [ ] Fix whatever dumb architecture I've put in place

 * `v0.3`
  * [ ] Click people's names to start private messaging them
  * [ ] Timestamp each message
  * [ ] `~/.prattle` folder maybe
  * [ ] Settings
    * [ ] Username
    * [ ] Real name
    * [ ] Password
    * [ ] Server
    * [ ] Default channels

 * `v0.4`
  * [ ] Friend list

 * `v0.5`
  * [ ] Notifications
  * [ ] Sounds?
  * [ ] Option to keep history of chat

## License
[MIT](http://opensource.org/licenses/MIT)
