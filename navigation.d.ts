import { RootStackParamList } from "./pages/types.props";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
