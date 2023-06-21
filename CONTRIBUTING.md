# Contributing

First of all, thank you very much for wanting to contribute to our project. All help is more than welcomed!

You can contribute `cheatsheet.js` by:

- [Fixing a typo / Improving some existing content / Creating a new subsection (eg. Basics/alert)](#fixes)
- [Creating a new section (eg. Dates)](#section)
- [Suggesting other changes](#other-changes)

## <a name="#fixes"></a> Fixing a typo / Improving some existing content / Creating a new subsection (eg. Basics/alert)

1. Select the section which you want to modify in [`/src/cheatsheet/en`](/src/cheatsheet/en) and click the button `Edit this file`.
2. Make the modifications you want and commit them.
3. Commit the pull request with the modifications.

![Commiting a pull request](/public/pull-request-github.gif)

OBS: If you want to preview the modifications you made, you can your run your fork locally following these [instructions](https://github.com/mymatsubara/cheatsheet-js#how-to-run-the-project-locally).

## <a name="#section"> Creating a new section

1. Fork the project
2. Create a new `.md` file in [`/src/cheatsheet/en`](/src/cheatsheet/en) for the new section
3. Add the new section on the `content` object in [`/src/cheatsheet/index.ts`](/src/cheatsheet/index.ts)
4. Submit a pull request with the modifications [here](https://github.com/mymatsubara/cheatsheet-js/pulls).

OBS: If you want to preview the modifications you made, you can your run your fork locally following these [instructions](https://github.com/mymatsubara/cheatsheet-js#how-to-run-the-project-locally).

## <a name="#other-changes"> Suggesting other changes

Feel to create an issue [here](https://github.com/mymatsubara/cheatsheet-js/issues/new/).
