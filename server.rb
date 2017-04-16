require 'sinatra/base'


class Thermostat < Sinatra::Base
p "starting server"
  enable :sessions

  get '/' do
    erb :index
  end

  post '/temperature/current' do
    headers 'Access-Control-Allow-Origin' => '*'
    session[:currentTemp] = params[:currentTemp]
    p "post:#{session[:currentTemp]}"
  end

  get '/temperature/current' do
    headers 'Access-Control-Allow-Origin' => '*'
    p "session:#{session.inspect}"
    p "get:#{session[:currentTemp]}"
    "Temp is: #{session[:currentTemp]}"
  end

  run! if app_file == $0

end
