# Starting With Karma

Java Script started in the browser, do you remember that? Yeah, it was some time ago, when we thought that this language is limited to a single environment. Now, once we develop full-stack JS applications, we sometimes forget about that. This also causes us to think that we can test our scripts without running it in the browser, too. But how can we actually go back to the roots and see our tests executed in Chrome or Firefox? Karma makes it so easy, just look!

It might be difficult to understand for some JS rookies, but the even though we are talking about the same language all the time, it can behave slightly different across various browsers. Historically Internet Explorer (an old brother of apparently very JS-friendly Edge browser) was always making developes scratch their heads once their code leaves their IDEs.

Karma (previously known as Testacular) is a test runner, that is extremely easy to set up, and it takes all your tests and run them agains a real web browser. This may seem a bit strange at first, having a window pop out all of the sudden, but in fact it provides you with a fast and useful feedback about your code.

### Starting it up

In order to start working with Karma, all you need to do is install a couple of npm packages:

    npm i --save-dev karma requirejs

Once you have those installed, I recommend you to add `karma` as a script to your `package.json`, so that it will be much easier to use later on:

    ...
      "scripts": {
        "karma": "karma"
      },
    ...

Then, we should set up some karma configuration. Sounds like a lot of work? Not at all - Karma provides a cool wizard (just like npm does), so all we need to do is answer a few questions:

    $ npm run karma init

    > karma-example@1.0.0 karma /path/to/karma-example
    > karma "init"


    Which testing framework do you want to use ?
    Press tab to list possible options. Enter to move to the next question.
    > jasmine

    Do you want to use Require.js ?
    This will add Require.js plugin.
    Press tab to list possible options. Enter to move to the next question.
    > no

    Do you want to capture any browsers automatically ?
    Press tab to list possible options. Enter empty string to move to the next question.
    > Chrome
    >

    What is the location of your source and test files ?
    You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
    Enter empty string to move to the next question.
    > src/**/*.js
    >

    Should any of the files included by the previous patterns be excluded ?
    You can use glob patterns, eg. "**/*.swp".
    Enter empty string to move to the next question.
    >

    Do you want Karma to watch all the files and run the tests on change ?
    Press tab to list possible options.
    > yes


    Config file generated at "/path/to/karma-example/karma.conf.js".

As you can see, I defined my sources as `src/**/*.js`, as our runner needs to know about both source files and their tests.

### Creating tests and running

Now that we have our test runner ready for some challenge, we need to create some tests, right? We'll stick to the simplest example of a calculator that sums two numbers:

    // src/calculator.js
    function Calculator() {

        this.sum = function (a, b) {
            return a + b;
        };

    }

Now we would like to check if our sum does its job:

    // src/calculator.spec.js
    var c = new Calculator();

    describe('calculator', function () {

        describe('sum', function () {

            it('should calculate sum correctly', function () {
                expect(c.sum(1, 2)).toEqual(3);
                expect(c.sum(3, 3)).toEqual(6);
            });

        });

    });

You should notice, that we don't need to tell our test where to find `Calculator`. Why is that? All the scripts are loaded into an output HTML template and run, so out `calculator.js` file is known to the browser once it tries to run `calculator.spec.js`.

To run our tests, all we need to do is type:

    npm run karma start

<img src="https://raw.githubusercontent.com/slomek/karma-example/master/posts/img/starting-with-karma-1.png"/>

It works!

### Another browser

Do we have to stick to a single browser at time, or can we add Firefox to the mix? Of course we can, and then all our tests will be ran simultaneously on both. We need to add `Firefox` to `browsers` array in `karma.conf.js` and install an appropriate launcher via npm:

     npm install karma-firefox-launcher --save-dev

Now when we run our tests, we get two separate windows to verify our code still works:

<img src="https://raw.githubusercontent.com/slomek/karma-example/master/posts/img/starting-with-karma-2.png"/>

### Live reload

It is also recommended to have Karma running in the background, so that you can get feedback immediately. We actually have it configured this way (`autoWatch` flag in `karma.conf.js`), so if I break my code and fix it later, you can see that I get notified immediately:

<img src="https://raw.githubusercontent.com/slomek/karma-example/master/posts/img/starting-with-karma-3.png"/>

As you can see, setting up tests in your browser requires little-to-none effort, but it is the best way to check if your code works in a live-like environment.
