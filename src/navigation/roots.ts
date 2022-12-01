import {Pages} from "./pages";
import {LayoutBottomTabs, Navigation} from "react-native-navigation";
import {Tabs} from "./tabs";
import {TabbarDarkResources, TabbarLightResources} from "~/common/ImageResources.g";
import {i18next} from "~/common/localization/localization";
import {ImageURISource} from "react-native";
import {Colors, DarkThemeColors, LightThemeColors, ThemeColors} from "~/core/theme/colors";
//import {Fonts} from "~/core/theme/fonts";
import {Components} from "~/navigation/components";
import {Fonts} from "~/core/theme/fonts";

interface ITabBarIconSet {
  bag: ImageURISource;
  date: ImageURISource;
  home: ImageURISource;
  menu: ImageURISource;
  news: ImageURISource;
}

export function setStorybookRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.storybook.name,
        id: Pages.storybook.id,
        options: {
          topBar: {
            visible: true,
            title: {
              text: i18next.t("pages.storybook"),
            },
          },
        },
      },
    },
  });
}

export function setInitialRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.splash.name,
        id: Pages.splash.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}

export function setAuthorizationRoot() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Pages.authorization.name,
              id: Pages.authorization.id,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
}

export async function setOnboardingRoot() {
  return Navigation.setRoot({
    root: {
      component: {
        name: Pages.onboarding.name,
        id: Pages.onboarding.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}

export const bottomTabsLayout = (iconSet: ITabBarIconSet, colors: ThemeColors): LayoutBottomTabs => ({
  id: Pages.tabs.id,
  children: [
    {
      stack: {
        id: Tabs.main.id,
        children: [
          {
            component: {
              id: Pages.main.id,
              name: Pages.main.name,
            },
          },
        ],
        options: {
          bottomTabs: {
            visible: false,
          },
          topBar: {
            visible: true,
            background: {
              color: Colors.white
            },
            title: {
              text: 'CoffeTime',
              fontFamily: Fonts.lobster,
              fontSize: 22,
              alignment: 'center',

            },
            rightButtons: [
              {
                id: Components.topBarFavoriteButton.id,
                text: 'Favorite',
                component: {
                  id: Components.topBarFavoriteButton.id,
                  name: Components.topBarFavoriteButton.name
                },
              },
            ],
          },
        },
      },
    },
  ],
});

export const getTabsRootLayout = (theme: "light" | "dark") => {
  let iconSet: ITabBarIconSet;
  let colors: ThemeColors;
  if (theme == "light") {
    iconSet = TabbarLightResources;
    colors = LightThemeColors;
  } else {
    iconSet = TabbarDarkResources;
    colors = DarkThemeColors;
  }

  return {
    root: {
      bottomTabs: bottomTabsLayout(iconSet, colors),
    },
  };
};
