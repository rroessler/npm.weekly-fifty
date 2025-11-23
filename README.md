# The Weekly Fifty Library

Allows safely fetching [The Weekly Fifty](https://theweeklyfifty.com.au/) latests quizzes.

## Installation

```shell
npm install weekly-fifty
```

## Usage

To use this library, the following is available:

```typescript
import { TW50 } from 'weekly-fifty';

// get the latest available quiz
const latest = await TW50.Fetch();
```

### Options

The `Options` available for `TW50.Fetch` include:

-   `url`: Optional override url for the quiz endpoint.
-   `parse`: Handles parsing fetch responses to quiz data.

## License

[MIT](LICENSE)
