# Contributing

First of all, thank you very much for wanting to contribute with our project. All help is more than welcomed!

You can contribute `Cheatsheet.js` by:

- [Fixing a typo / Improving some existing content / Creating a new subsection (eg. Basics/alert)](#fixes)
- [Creating a new section (eg. Dates)](#section)
- [Suggesting other changes](#other-changes)

## <a name="#fixes"></a> Fixing a typo / Improving some existing content / Creating a new subsection (eg. Basics/alert)

1. Find the section which you want to modify in [`/src/cheatsheet/en`](/src/cheatsheet/en) and click in the button `Edit this file`.
   ![Edit this file](/public/edit-github-file.gif)
2. Make the modifications you want and commit them.
3. Commit the pull request.

![Commiting a pull request](/public/pull-request-github.gif)

OBS: If you want to preview the modifications you made you can your fork locally following these [instructions](https://github.com/mymatsubara/cheatsheet-js#how-to-run-the-project-locally).

## <a name="#section"> Creating a new section

1. Fork the project
2. Create an new `.md` file in [`/src/cheatsheet/en`](/src/cheatsheet/en) for the new section
3. Add the new section on the `content` object in [`/src/cheatsheet/index.ts`](/src/cheatsheet/index.ts)
4. Submit a pull request with the modifications [here](https://github.com/mymatsubara/cheatsheet-js/pulls).

OBS: If you want to preview the modifications you made you can your fork locally following these [instructions](https://github.com/mymatsubara/cheatsheet-js#how-to-run-the-project-locally).

## <a name="#other-changes"> Suggesting other changes

Feel to create an issue [here](https://github.com/mymatsubara/cheatsheet-js/issues/new/)
