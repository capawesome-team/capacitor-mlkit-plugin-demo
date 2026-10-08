# capacitor-mlkit-plugin-demo

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/capawesome-team/capacitor-mlkit-plugin-demo/ci.yml?branch=main)](https://github.com/capawesome-team/capacitor-mlkit-plugin-demo/actions)

<!-- [![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/capawesome-team/capacitor-mlkit-plugin-demo?color=brightgreen&label=version)](https://github.com/capawesome-team/capacitor-mlkit-plugin-demo/releases) -->

⚡️ Simple Ionic Angular app to demonstrate the use of certain Capacitor ML Kit plugins.

<div class="capawesome-z29o10a">
  <a href="https://cloud.capawesome.io/" target="_blank">
    <img alt="Deliver Live Updates to your Capacitor app with Capawesome Cloud" src="https://cloud.capawesome.io/assets/banners/cloud-build-and-deploy-capacitor-apps.png?t=1" />
  </a>
</div>

## Plugins

The following plugins are included:

- [capacitor-mlkit/barcode-scanning](https://capawesome.io/docs/sdks/capacitor/mlkit/barcode-scanning/)
- [capacitor-mlkit/digital-ink-recognition](https://capawesome.io/docs/sdks/capacitor/mlkit/digital-ink-recognition/)
- [capacitor-mlkit/document-scanner](https://capawesome.io/docs/sdks/capacitor/mlkit/document-scanner/)
- [capacitor-mlkit/entity-extraction](https://capawesome.io/docs/sdks/capacitor/mlkit/entity-extraction/)
- [capacitor-mlkit/face-detection](https://capawesome.io/docs/sdks/capacitor/mlkit/face-detection/)
- [capacitor-mlkit/face-mesh-detection](https://capawesome.io/docs/sdks/capacitor/mlkit/face-mesh-detection/)
- [capacitor-mlkit/image-labeling](https://capawesome.io/docs/sdks/capacitor/mlkit/image-labeling/)
- [capacitor-mlkit/language-identification](https://capawesome.io/docs/sdks/capacitor/mlkit/language-identification/)
- [capacitor-mlkit/object-detection](https://capawesome.io/docs/sdks/capacitor/mlkit/object-detection/)
- [capacitor-mlkit/pose-detection](https://capawesome.io/docs/sdks/capacitor/mlkit/pose-detection/)
- [capacitor-mlkit/selfie-segmentation](https://capawesome.io/docs/sdks/capacitor/mlkit/selfie-segmentation/)
- [capacitor-mlkit/smart-reply](https://capawesome.io/docs/sdks/capacitor/mlkit/smart-reply/)
- [capacitor-mlkit/subject-segmentation](https://capawesome.io/docs/sdks/capacitor/mlkit/subject-segmentation/)
- [capacitor-mlkit/text-recognition](https://capawesome.io/docs/sdks/capacitor/mlkit/text-recognition/)
- [capacitor-mlkit/translation](https://capawesome.io/docs/sdks/capacitor/mlkit/translation/)

## Development Setup 💻

### Prerequisites

- Install [Node.js](https://nodejs.org) which includes [Node Package Manager](https://www.npmjs.com/get-npm)
  (`^22.22.3 || ^24.15.0 || >=26.0.0`, as required by Angular)
- Android development: Install [Android Studio](https://developer.android.com/studio)
- iOS development: Install [XCode](https://apps.apple.com/de/app/xcode/id497799835?mt=12)

### Getting Started

Clone this repository:

```
git clone https://github.com/capawesome-team/capacitor-mlkit-plugin-demo.git
```

Change to the root directory of the project:

```
cd capacitor-mlkit-plugin-demo
```

Install all dependencies:

```
npm i
```

Prepare and launch the Android app:

```
npm run build
npx cap sync android
npx cap run android
```

Prepare and launch the iOS app:

```
npm run build
npx cap sync ios
npx cap run ios
```

This project uses [Ionic](https://ionicframework.com/) as app development platform.

<!-- ## Changelog

See [CHANGELOG.md](https://github.com/capawesome-team/capacitor-mlkit-plugin-demo/blob/main/CHANGELOG.md). -->

## License

See [LICENSE](https://github.com/capawesome-team/capacitor-mlkit-plugin-demo/blob/main/LICENSE).
