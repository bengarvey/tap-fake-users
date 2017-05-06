# tap-fake-users
singer-io tap for generating fake users for test purposes

### Why does this exist?

I wanted to see if I could write a singer-io tap in javascript and generating a bunch of fake users seemed like an easy first attempt. It probably won't be useful for anyone, but don't use it to inflate your app's MAU like on Silicon Valley.

### Installation

You'll need node.js and npm installed
https://docs.npmjs.com/getting-started/installing-node

In this directory, run `npm install` to install any dependencies this script has

Follow the steps for installing whatever singer-io target you want to use, such as
https://github.com/singer-io/target-csv

### Running

To send the fake users to a csv file, run
`node tap-fake-users | target-csv`

