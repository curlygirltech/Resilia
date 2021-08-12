Rails.application.routes.draw do
  get '/notifications', to: "notifications#index" # all notifications
  # resources :notifications
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
