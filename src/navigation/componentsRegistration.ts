import {Navigation, NavigationFunctionComponent} from "react-native-navigation";
import {Pages} from "./pages";
import {Main} from "~/modules/main/Main";
import {Splash} from "~/modules/splash/Splash";
import {ToastOverlay} from "~/common/components/ToastOverlay";
import {DatePickerOverlay} from "~/common/components/DatePickerOverlay";
import {Onboarding} from "~/modules/onboarding/Onboarding";
import {AppNavigationComponentProps, NavigationHOC, NavigationHOCProps} from "~/navigation/helpers/NavigationHOC";
import {Menu} from "~/modules/menu/Menu";
import {reduxProvider} from "~/core/store/store";
import {gestureHandlerRootHOC} from "react-native-gesture-handler";
import {Components} from "~/navigation/components";
import {TopBarTitle} from "~/navigation/components/TopBarTitle";
import {TopBarBackButton} from "~/navigation/components/TopBarBackButton";
import {Authorization} from "~/modules/authorization/Authorization";
import {Login} from "~/modules/login/Login";
import {Registration} from "~/modules/registration/Registration";
import {Cafe} from "~/modules/cafe/Cafe";
import {Drink} from "~/modules/drink/Drink";
import {Favorite} from "~/modules/favorite/Favorite";
import {TopBarFavoriteButton} from "~/navigation/components/TopBarFavoriteButton";

function registerAppScreenComponent<P extends AppNavigationComponentProps>(props: NavigationHOCProps<P>) {
  Navigation.registerComponent(props.page.name, () => NavigationHOC(props), () => props.Component);
}

const registerReduxComponent = (name: string, Component: NavigationFunctionComponent<any>) => {
  Navigation.registerComponent(
      name,
      () => gestureHandlerRootHOC(reduxProvider(Component)),
      () => Component,
  );
};

export function registerComponents() {
  registerAppScreenComponent({Component: Splash, page: Pages.splash, useRedux: true});
  registerAppScreenComponent({Component: Onboarding, page: Pages.onboarding, useRedux: true});
  registerAppScreenComponent({Component: Authorization, page: Pages.authorization, useRedux: true});
  registerAppScreenComponent({Component: Login, page: Pages.login, useRedux: true});
  registerAppScreenComponent({Component: Registration, page: Pages.registration, useRedux: true});
  registerAppScreenComponent({Component: Main, page: Pages.main, useRedux: true});
  registerAppScreenComponent({Component: Cafe, page: Pages.cafe, useRedux: true});
  registerAppScreenComponent({Component: Drink, page: Pages.drink, useRedux: true});
  registerAppScreenComponent({Component: Favorite, page: Pages.favorite, useRedux: true});
  registerAppScreenComponent({Component: Menu, page: Pages.menu, titleKey: "pages.menu", useRedux: true});
  Navigation.registerComponent(Pages.toast.name, () => ToastOverlay);

  registerReduxComponent(Components.topBarTitle.name, TopBarTitle);
  registerReduxComponent(Components.topBarBackButton.name, TopBarBackButton);
  registerReduxComponent(Components.topBarFavoriteButton.name, TopBarFavoriteButton);
  registerReduxComponent(Pages.datePicker.name, DatePickerOverlay);
}
