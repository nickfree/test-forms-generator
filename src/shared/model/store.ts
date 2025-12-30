import { createStore } from "vuex";

// не по FSD, но с vuex иначе сложно
import { userModule } from "src/entities/User";
import { organizationModule } from "src/entities/Organization";

export const store = createStore({
  modules: {
    userModule,
    organizationModule,
  }
})