# Introduction

Thank you for considering contributing to our project! We appreciate the time and effort you're willing to invest in making our project better. Before you start contributing, we'd like to ensure that the process is as smooth and collaborative as possible. These guidelines are designed to help you understand how you can contribute and what steps you can take to make your contributions effective and well-received.

Our project thrives on the enthusiasm and expertise of its community. Whether you're a seasoned developer or a first-time contributor, your input is valuable. This document provides a set of guidelines and best practices to ensure that your contributions are welcomed, reviewed, and integrated successfully.

## Getting Started:

- **Code of Conduct :** We expect all contributors to abide by our code of conduct, ensuring a positive and inclusive community.
- **How to Contribute :** Learn about the various ways you can contribute to the project, from reporting issues to submitting code changes.

## Types of Contributions:

- **Bug Reports :** Help us discover and fix bugs by reporting them with detailed information.
- **Feature Requests :** Share your ideas and suggestions for new features or improvements.
- **Pull Requests :** Contribute code changes and enhancements to [Project Name]. Follow our guidelines to submit pull requests that streamline the review process.

By following these guidelines, you're helping to ensure that your contributions align with the project's goals and standards. We appreciate your dedication to making this project a better and more robust tool for everyone.

Thank you for being part of the community!

Happy coding !

# Structure

The structure of commit messages must respect the following form, must be in lowercase and in English:

```
<gitmoji> <type> <description> [(#<issue number>)]

[optional body]

[optional footer(s)]
```

Example:

```
<⚙️> <FIX> <Fix login> [(#002)]

[optional body]

[optional footer(s)]
```

But most of the time, to avoid wasting time, commits look like this:

```
📝 update documentation contributors
```

# Emojis
We use [Gitmojis](https://gitmoji.dev/) to categorize our commits, it has a good ecosystem and is very easy to use on a day-to-day basis.

Here's the full list of Gitmoji and their uses:

| Emoji | Code                          | Description                                                   |
| ----- | ----------------------------- | ------------------------------------------------------------- |
| 🎨    | `:art:`                       | Improve structure/format of the code                          |
| ⚡️   | `:zap:`                       | Improve performance                                           |
| 🔥    | `:fire:`                      | Remove code or files                                          |
| 🐛    | `:bug:`                       | Fix a bug                                                     |
| 🚑    | `:ambulance:`                 | Critical hotfix                                               |
| ✨    | `:sparkles:`                  | Introduce new features                                        |
| 📝    | `:memo:`                      | Add or update documentation                                   |
| 🚀    | `:rocket:`                    | Deploy stuff                                                  |
| 💄    | `:lipstick:`                  | Add or update the UI and style files                          |
| 🎉    | `:tada:`                      | Begin a project                                               |
| ✅    | `:white_check_mark:`          | Add, update, or pass tests                                    |
| 🔒    | `:lock:`                      | Fix security or privacy issues                                |
| 🔐    | `:closed_lock_with_key:`      | Add or update secrets                                         |
| 📚    | `:bookmark:`                  | Release/Version tags                                          |
| 🚨    | `:rotating_light:`            | Fix compiler/linter warnings                                  |
| 🚧    | `:construction:`              | Work in progress                                              |
| 💚    | `:green_heart:`               | Fix CI Build                                                  |
| ⬇️    | `:arrow_down:`                | Downgrade dependencies                                        |
| ⬆️    | `:arrow_up:`                  | Upgrade dependencies                                          |
| 📌    | `:pushpin:`                   | Pin dependencies to specific versions                         |
| 👷    | `:construction_worker:`       | Add or update CI build system                                 |
| 📈    | `:chart_with_upwards_trend:`  | Add or update analytics or track code                         |
| ♻️    | `:recycle:`                   | Refactor code                                                 |
| ➕    | `:heavy_plus_sign:`           | Add a dependency                                              |
| ➖    | `:heavy_minus_sign:`          | Remove a dependency                                           |
| 🔧    | `:wrench:`                    | Add or update configuration files                             |
| 🔨    | `:hammer:`                    | Add or update development scripts                             |
| 🌐    | `:globe_with_meridians:`      | Internationalization and localization                         |
| ✏️    | `:pencil2:`                   | Fix typos                                                     |
| 💩    | `:poop:`                      | Write bad code that needs to be improved                      |
| ⏪    | `:rewind:`                    | Revert changes                                                |
| 🔀    | `:twisted_rightwards_arrows:` | Merge branches                                                |
| 📦    | `:package:`                   | Add or update compiled files or packages                      |
| 👽    | `:alien:`                     | Update code due to external API changes                       |
| 🚚    | `:truck:`                     | Move or rename resources (e.g., files, paths, routes)         |
| 📄    | `:page_facing_up:`            | Add or update license                                         |
| 💥    | `:boom:`                      | Introduce breaking changes                                    |
| 🍱    | `:bento:`                     | Add or update assets                                          |
| ♿    | `:wheelchair:`                | Improve accessibility                                         |
| 💡    | `:bulb:`                      | Add or update comments in source code                         |
| 🍻    | `:beers:`                     | Write code drunkenly                                          |
| 💬    | `:speech_balloon:`            | Add or update text and literals                               |
| 🗃️    | `:card_file_box:`             | Perform database related changes                              |
| 🔊    | `:loud_sound:`                | Add or update logs                                            |
| 🔇    | `:mute:`                      | Remove logs                                                   |
| 👥    | `:busts_in_silhouette:`       | Add or update contributor(s)                                  |
| 🚸    | `:children_crossing:`         | Improve user experience/usability                             |
| 🏗️    | `:building_construction:`     | Make architectural changes                                    |
| 📱    | `:iphone:`                    | Work on responsive design                                     |
| 🤡    | `:clown_face:`                | Mock things                                                   |
| 🥚    | `:egg:`                       | Add or update an easter egg                                   |
| 🙈    | `:see_no_evil:`               | Add or update a .gitignore file                               |
| 📸    | `:camera_flash:`              | Add or update snapshots                                       |
| 🔬    | `:alembic:`                   | Perform experiments                                           |
| 🔍️   | `:mag:`                       | Improve SEO                                                   |
| 🏷️    | `:label:`                     | Add or update types                                           |
| 🌱    | `:seedling:`                  | Add or update seed files                                      |
| 🚩    | `:triangular_flag_on_post:`   | Add, update, or remove feature flags                          |
| 🥅    | `:goal_net:`                  | Catch errors                                                  |
| 💫    | `:dizzy:`                     | Add or update animations and transitions                      |
| 🗑️    | `:wastebasket:`               | Deprecate code that needs to be cleaned up                    |
| 🛂    | `:passport_control:`          | Work on code related to authorization, roles, and permissions |
| 🩹    | `:adhesive_bandage:`          | Simple fix for a non-critical issue                           |
| 🧐    | `:monocle_face:`              | Data exploration/inspection                                   |
| ⚰️    | `:coffin:`                    | Remove dead code                                              |
| 🧪    | `:test_tube:`                 | Add a failing test                                            |
| 👔    | `:necktie:`                   | Add or update business logic                                  |
| 🩺    | `:stethoscope:`               | Add or update healthcheck                                     |
| 🧱    | `:bricks:`                    | Infrastructure related changes                                |
| 👨‍💻    | `:technologist:`              | Improve developer experience                                  |
| 💸    | `:money_with_wings:`          | Add sponsorships or money related infrastructure              |
| 🧵    | `:thread:`                    | Add or update code related to multithreading or concurrency   |
| 🦺    | `:safety_vest:`               | Add or update code related to validation                      |

# Types

We use the following types :

| Type            | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| feat            | Introduces a new feature                                      |
| fix             | Patches a bug                                                 |
| BREAKING CHANGE | Introduces a breaking API change                              |
| build           | Changes that affect the build system or external dependencies |
| chore           | Other changes that don't modify src or test files             |
| ci              | Changes to our CI configuration files and scripts             |
| docs            | Documentation only changes                                    |
| style           | Changes that do not affect the meaning of the code            |
| refactor        | A code change that neither fixes a bug nor adds a feature     |
| perf            | A code change that improves performance                       |
| test            | Adding missing tests or correcting existing tests             |

# Description

The description must be a short description of the commit, written in the imperative, present tense. For example :

```
# Good
📝 update documentation contributors

# Bad
📝 updated documentation contributors
```

# Issue

If the commit is linked to an issue, you can add the issue number at the end of the description, for example:

```
📝 update documentation contributors (#123)
```

# Contributions

If the commit was co-written, you can add the authors at the end of the commit, for example:

```
# Good
📝 update documentation contributors

- Add @imjustlucas as a contributor
- Add @lucas_huerta as a contributor

Co-authored-by: John Doe <john@doe.com>

# Bad
📝 update documentation contributors

- Added @imjustlucas as a contributor
- Added @lucas_huerta as a contributor

Co-authored-by: John Doe <john@doe.com>
```







